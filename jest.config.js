module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+.(?!js|jsx|ts|tsx).*$": "jest-transform-stub", // stubs all not javascript files
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.test.json",
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/generated/**"],
  coverageDirectory: "./coverage",
};
