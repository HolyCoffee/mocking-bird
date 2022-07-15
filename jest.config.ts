import path from 'path';
import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

import tsConfig from './tsconfig.json';

export default {
  bail: 1,
  verbose: true,
  clearMocks: true,
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
    prefix: '<rootDir>/'
  }),
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testEnvironment: 'node',
  testMatch: [
    path.resolve(__dirname, 'tests/**/*.test.ts')
  ]
} as Config.InitialOptions;
