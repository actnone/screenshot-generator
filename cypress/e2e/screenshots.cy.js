import projects, {
  STORES,
  getDeviceClassForSize,
  getOutputSize,
  getProjectOutputSizeKeysForStore,
  getProjectScreensForStore,
} from '../../src/config';

const BASE_URL = 'http://localhost:3000';

function getStoreOrThrow() {
  const store = Cypress.env('store');
  if (typeof store !== 'string' || !STORES.includes(store)) {
    throw new Error(
      `Missing or invalid Cypress env "store". Use one of: ${STORES.join(', ')}`
    );
  }
  return store;
}

function getProjectsOrThrow() {
  const projectFilter = Cypress.env('project');
  if (typeof projectFilter !== 'string' || projectFilter.trim() === '') {
    return projects;
  }

  const requestedProjectKeys = projectFilter
    .split(/[|,]/)
    .map((key) => key.trim())
    .filter(Boolean);
  const availableProjectKeys = projects.map((project) => project.key);
  const invalidProjectKeys = requestedProjectKeys.filter(
    (key) => !availableProjectKeys.includes(key)
  );

  if (invalidProjectKeys.length > 0) {
    throw new Error(
      `Invalid Cypress env "project": ${invalidProjectKeys.join(', ')}. ` +
      `Use one of: ${availableProjectKeys.join(', ')}`
    );
  }

  return projects.filter((project) => requestedProjectKeys.includes(project.key));
}

describe('screenshots', () => {
  it('take screenshots', () => {
    cy.visit('http://localhost:3000');
    const store = getStoreOrThrow();
    const projectsToGenerate = getProjectsOrThrow();

    projectsToGenerate.forEach((project) => {
      const outputSizeKeys = getProjectOutputSizeKeysForStore(project, store);
      outputSizeKeys.forEach((outputSizeKey) => {
        const outputSize = getOutputSize(outputSizeKey);
        const deviceClass = getDeviceClassForSize(outputSizeKey);

        if (!outputSize || !deviceClass) {
          return;
        }

        const screens = getProjectScreensForStore(project, store, deviceClass);
        if (!screens) {
          return;
        }

        cy.viewport(outputSize.width / 2, outputSize.height / 2);

        screens.forEach((screen, index) => {
          project.languages.forEach((language) => {
            const url = `${BASE_URL}/screens/${project.key}/${deviceClass}/${screen.key}/${language}/${outputSizeKey}`;
            cy.visit(url);

            const filename = `${project.key}/${store}/${language}/${outputSizeKey}/${index + 1}_${screen.key}`;
            cy.wait(500);
            cy.screenshot(filename, { overwrite: true, capture: 'viewport' });
          });
        });
      });
    });
  });
});
