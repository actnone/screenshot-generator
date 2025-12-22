import { useDevice } from "../context/DeviceContext";

const BASE_WIDTH = 1284; // 6.5" iPhone width
const TABLET_SCALE_MULTIPLIER = 0.65; // Reduce tablet scale to prevent oversized elements

/**
 * Returns a device-aware scale factor based on width.
 * Tablets get a reduced multiplier to prevent elements from being too large.
 */
export function useScale(): number {
  const { width, isTablet } = useDevice();
  const baseScale = width / BASE_WIDTH;

  return isTablet ? baseScale * TABLET_SCALE_MULTIPLIER : baseScale;
}
