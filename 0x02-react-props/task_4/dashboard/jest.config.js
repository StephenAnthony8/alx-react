const { TestEnvironment } = require("jest-environment-jsdom");


/* config files that deal with webpack setting up of react tests */
module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    /* ensures that all image files get mocked(I hope to understand the meaning of this word) */
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
      /* ensures that all css files get mocked */
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  /* sets up the jest-dom library to be used in tests */
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js']
};