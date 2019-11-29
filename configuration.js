'use strict';

const configuration = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git'
  ],
  /* eslint-disable no-template-curly-in-string */
  tagFormat: '${version}'
  /* eslint-enable no-template-curly-in-string */
};

module.exports = configuration;
