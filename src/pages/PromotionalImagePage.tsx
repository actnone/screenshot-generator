import { useParams } from "react-router-dom";
import projects, { PROMOTIONAL_IMAGE_SIZE } from "../config";
import { DeviceProvider } from "../context/DeviceContext";

// Renders one of a project's Google Play promotional images at half its output size, the
// same way screens are rendered
function PromotionalImagePage() {
  const { projectKey, imageKey } = useParams();
  const project = projects.find((p) => p.key === projectKey);
  const image = project?.promotionalImages?.find((i) => i.key === imageKey);

  if (!image) {
    return null;
  }

  const ImageComponent = image.component;
  const { width, height } = PROMOTIONAL_IMAGE_SIZE;

  return (
    <div className="screen promotional" style={{ width: width / 2, height: height / 2 }}>
      <DeviceProvider deviceClass="desktop" width={width} height={height}>
        <ImageComponent language="en" width={width} height={height} />
      </DeviceProvider>
    </div>
  );
}

export default PromotionalImagePage;
