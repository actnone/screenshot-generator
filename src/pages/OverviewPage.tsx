import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import projects, { ColorScheme, LanguageCode, colorSchemes } from "../config";
import Screen from "../components/Screen";

const SCALE_OPTIONS = [0.25, 0.5, 0.75, 1.0];
const DEFAULT_SCALE = 0.5;

function getSystemColorScheme(): ColorScheme {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
}

function OverviewPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const systemColorScheme = useMemo(() => getSystemColorScheme(), []);

  const projectParam = searchParams.get("project");
  const scaleParam = searchParams.get("scale");
  const languageParam = searchParams.get("language");
  const colorSchemeParam = searchParams.get("colorScheme");

  // Find the selected project, default to first project
  const project = projects.find((p) => p.key === projectParam) || projects[0];

  const scale = scaleParam ? parseFloat(scaleParam) : DEFAULT_SCALE;
  const language = (languageParam as LanguageCode) || project.languages[0];
  const colorScheme = (colorSchemeParam as ColorScheme) || systemColorScheme;

  const handleProjectChange = (newProject: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("project", newProject);
    // Reset language when switching projects
    const newProjectConfig = projects.find((p) => p.key === newProject);
    if (newProjectConfig && !newProjectConfig.languages.includes(language)) {
      params.set("language", newProjectConfig.languages[0]);
    }
    setSearchParams(params);
  };

  const handleScaleChange = (newScale: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("scale", newScale);
    setSearchParams(params);
  };

  const handleLanguageChange = (newLanguage: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("language", newLanguage);
    setSearchParams(params);
  };

  const handleColorSchemeChange = (newColorScheme: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("colorScheme", newColorScheme);
    setSearchParams(params);
  };

  return (
    <div className={`overview-page ${colorScheme}`}>
      <div className="overview-controls">
        <label>
          Project:
          <select
            value={project.key}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleProjectChange(e.target.value)
            }
          >
            {projects.map((p) => (
              <option key={p.key} value={p.key}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Language:
          <select
            value={language}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleLanguageChange(e.target.value)
            }
          >
            {project.languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </label>

        <label>
          Scale:
          <select
            value={scale}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleScaleChange(e.target.value)
            }
          >
            {SCALE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s * 100}%
              </option>
            ))}
          </select>
        </label>

        <label>
          Color Scheme:
          <select
            value={colorScheme}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleColorSchemeChange(e.target.value)
            }
          >
            {colorSchemes.map((scheme) => (
              <option key={scheme} value={scheme}>
                {scheme.charAt(0).toUpperCase() + scheme.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overview-grid">
        {project.devices.map((device) => (
          <div key={device.key} className="overview-device">
            <h2>{device.key}</h2>
            <div className="overview-screens">
              {device.screens.map((screen) => (
                <div
                  key={screen.key}
                  className="overview-screen-wrapper"
                  style={{
                    width: (device.width / 2) * scale,
                    height: (device.height / 2) * scale,
                  }}
                >
                  <div
                    className="overview-screen-scaled"
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                    }}
                  >
                    <Screen
                      projectKey={project.key}
                      deviceKey={device.key}
                      screenKey={screen.key}
                      language={language}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewPage;
