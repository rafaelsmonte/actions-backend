/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json-summary", "text", "lcov"],
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};