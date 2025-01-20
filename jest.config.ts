export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    ],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
};
