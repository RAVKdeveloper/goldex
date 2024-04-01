import { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  rootDir: 'src',
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': 'jest-transform-stub',
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css)$': 'identity-obj-proxy',
    'goldex-icon-library': 'identity-obj-proxy',
    'goldex-ui-library': 'identity-obj-proxy',
    // '^@shared/*/(.*)$': '<rootDir>/shared/$1',
    // '^@widgets/*/(.*)$': '<rootDir>/widgets/$1',
    // '^@entities/*/(.*)$': '<rootDir>/entities/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!goldex-icon-library)',
    '/node_modules/(?!goldex-ui-library)',
  ],
  setupFilesAfterEnv: ['<rootDir>/app/configs/jest.setup.ts'],
}

export default config
