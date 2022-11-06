import { UserConfig } from "vitest/config";

export const vitestConfig: UserConfig["test"] = {
  globals: true,
  environment: "jsdom",
  transformMode: {
    web: [/\.[jt]sx$/],
  },
};
