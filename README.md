# semantic-release-configuration

semantic-release-configuration contains the semantic-release configuration for the native web.

## Status

| Category         | Status                                                                                                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Version          | [![npm](https://img.shields.io/npm/v/semantic-release-configuration)](https://www.npmjs.com/package/semantic-release-configuration)                                                      |
| Dependencies     | ![David](https://img.shields.io/david/thenativeweb/semantic-release-configuration)                                                                                                       |
| Dev dependencies | ![David](https://img.shields.io/david/dev/thenativeweb/semantic-release-configuration)                                                                                                   |
| Build            | ![GitHub Actions](https://github.com/thenativeweb/semantic-release-configuration/workflows/Release/badge.svg?branch=main)                                                                           |
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

To use this configurations, create a `.releaserc.json` file in your project and use the `extends` keyword.

```json
{
  "extends": "semantic-release-configuration"
}
```

## Running quality assurance

To run quality assurance for this module use [roboter](https://www.npmjs.com/package/roboter):

```shell
$ npx roboter
```
