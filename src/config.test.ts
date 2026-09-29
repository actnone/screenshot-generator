import { describe, expect, it } from "vitest";
import { OUTPUT_SIZES, getScreenshotFileName } from "./config";

describe("getScreenshotFileName", () => {
  it("puts App Store screenshots in one folder, prefixed with their size", () => {
    expect(getScreenshotFileName("appStore", "iphone69-portrait", 1, "torturer")).toBe(
      "iphone69-portrait_1_torturer.png",
    );
  });

  it("puts Google Play screenshots in a folder per slot", () => {
    expect(getScreenshotFileName("googlePlay", "android-phone-portrait", 2, "secrets")).toBe(
      "phoneScreenshots/2_secrets.png",
    );
    expect(getScreenshotFileName("googlePlay", "ipad11-portrait", 3, "explore")).toBe(
      "sevenInchScreenshots/3_explore.png",
    );
    expect(getScreenshotFileName("googlePlay", "ipad129-portrait", 4, "explore")).toBe(
      "tenInchScreenshots/4_explore.png",
    );
  });

  it("gives every Google Play size its own slot", () => {
    const googlePlaySizes = OUTPUT_SIZES.filter((size) => size.stores.includes("googlePlay"));
    const slots = googlePlaySizes.map((size) => size.googlePlaySlot);
    expect(slots.every(Boolean)).toBe(true);
    expect(new Set(slots).size).toBe(slots.length);
  });
});
