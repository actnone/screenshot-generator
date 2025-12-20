import projects, { getOutputSize, getDeviceClassForSize } from '../../src/config';

const BASE_URL = 'http://localhost:3000';

describe('screenshots', () => {
  it('take screenshots', () => {
    cy.visit('http://localhost:3000');

    projects.forEach((project) => {
      project.outputSizes.forEach((outputSizeKey) => {
        const outputSize = getOutputSize(outputSizeKey);
        const deviceClass = getDeviceClassForSize(outputSizeKey);

        if (!outputSize || !deviceClass) {
          return;
        }

        const screens = project.screens[deviceClass];
        if (!screens) {
          return;
        }

        cy.viewport(outputSize.width / 2, outputSize.height / 2);

        screens.forEach((screen, index) => {
          project.languages.forEach((language) => {
            const url = `${BASE_URL}/screens/${project.key}/${deviceClass}/${screen.key}/${language}/${outputSizeKey}`;
            cy.visit(url);

            const filename = `${project.key}/${language}/${outputSizeKey}/${index + 1}_${screen.key}`;
            cy.wait(500);
            cy.screenshot(filename, { overwrite: true, capture: 'viewport' });
          });
        });
      });
    });
  });
});
