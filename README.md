# semantic-release-configuration

semantic-release-configuration contains the semantic-release configuration for the native web.

## Status

| Category         | Status                                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/semantic-release-configuration)](https://www.npmjs.com/package/semantic-release-configuration)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/semantic-release-configuration)                                                                                                       |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/semantic-release-configuration)                                                                                                   |
| Build            | [![CircleCI](https://img.shields.io/circleci/build/github/thenativeweb/semantic-release-configuration)](https://circleci.com/gh/thenativeweb/semantic-release-configuration/tree/master) |
| License          | ![GitHub](https://img.shields.io/github/license/thenativeweb/semantic-release-configuration)                                                                                             |

## Installation

```shell
$ npm install semantic-release-configuration
```

The following semantic-release components are included by default, so you don't have to install them:

- [semantic-release](https://www.npmjs.com/package/semantic-release)
- [@semantic-release/changelog](https://www.npmjs.com/package/@semantic-release/changelog)
- [@semantic-release/git](https://www.npmjs.com/package/@semantic-release/git)

## Quick Start

This module contains the semantic-release configuration for the native web.

To use this configurations, create a `.releaserc.json` file in your project and use the `extends` keyword.

```json
{
  "extends": "semantic-release-configuration"
}
```

## Running the build

```shell
$ npx roboter
```
