# Santa App

A simple Node.js application built on Express and React, instantly up and running.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Contributing](#contributing)
- [License](#license)

## Description

Santa App is a lightweight, scalable Node.js application that leverages the power of Express for server-side logic and React for client-side interactions. It's designed to be easy to set up and extend, making it ideal for both beginner and professional developers.

## Features

- **Express Server**: Fast, unopinionated, minimalist web framework for Node.js.
- **React Frontend**: Build modern, interactive user interfaces.
- **Vite**: Next-generation frontend tooling for fast builds and hot module replacement.
- **Environment Configuration**: Manage environment variables with `dotenv`.
- **Form Handling**: Robust form validation and handling using `react-hook-form` and `joi`.
- **Email Notifications**: Send emails using `nodemailer`.
- **Scheduled Tasks**: Schedule cron jobs with `node-cron`.
- **Logging**: Comprehensive logging with `winston` and `winston-daily-rotate-file`.
- **Styling**: Use `styled-components` for component-level styling.
- **Alerts**: SweetAlert2 for beautiful, responsive, customizable popups.
- **Testing**: Comprehensive testing setup using Jest and React Testing Library.

## Installation

To get started with Santa App, clone the repository and install the dependencies:

[Read Installation Instructions](/docs/requirements/README.md)

```bash
npm install
```

## Usage

### Development

Start the development server:

```bash
npm run start:vite
```

This will start the Vite development server on port 3000

### Production

Build the application for production:

```bash
npm run build:vite
```

### Start the production server:

```bash
npm start
```

## Scripts

- **start:vite**: Start the Vite development server.
- **start**: Start the Express server with `dotenv` configuration.
- **build:vite**: Build the frontend using Vite.
- **test**: Run tests using Jest.
- **prettify**: Format the code using Prettier.
- **cypress:run**: It runs the cypress test.
- **cypress:open**: It opens the interactive cypress end to end test in the browsers.
- **test:coverage**: To generate the test coverage report

## Dependencies

- `@vitejs/plugin-react`: Vite plugin for React.
- `axios`: Promise based HTTP client for the browser and node.js.
- `body-parser`: Node.js body parsing middleware.
- `colors`: Get colors in your node.js console.
- `cors`: Middleware to enable Cross-Origin Resource Sharing.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `express`: Fast, unopinionated, minimalist web framework.
- `joi`: Powerful schema description language and data validator for JavaScript.
- `morgan`: HTTP request logger middleware for node.js.
- `node-cron`: A simple cron-like job scheduler for Node.js.
- `nodemailer`: Easy as cake e-mail sending from your Node.js applications.
- `react`: A JavaScript library for building user interfaces.
- `react-dom`: Serves as the entry point to the DOM and server renderers for React.
- `react-hook-form`: Performant, flexible and extensible forms with easy-to-use validation.
- `react-spinners`: A collection of loading spinner components for React.
- `request`: Simplified HTTP client.
- `sanitize.css`: A best-practices CSS foundation.
- `styled-components`: Visual primitives for the component age.
- `sweetalert2`: A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes.
- `winston`: A logger for just about everything.
- `winston-daily-rotate-file`: A transport for winston which logs to a rotating file each day.

## DevDependencies

- `@testing-library/jest-dom`: Custom jest matchers to test the state of the DOM.
- `@testing-library/react`: Simple and complete React DOM testing utilities.
- `@types/jest`: TypeScript definitions for Jest.
- `@types/react`: TypeScript definitions for React.
- `@types/react-dom`: TypeScript definitions for React DOM.
- `identity-obj-proxy`: Useful for mocking CSS modules in Jest.
- `jest`: Delightful JavaScript testing.
- `jest-environment-jsdom`: Jest environment for testing with jsdom.
- `jest-styled-components`: Jest utilities for Styled Components.
- `jest-transformer-svg`: Jest transformer for SVG files.
- `postcss-styled-syntax`: PostCSS syntax for styled-components.
- `prettier`: An opinionated code formatter.
- `stylelint`: A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- `stylelint-config-standard`: The standard shareable config for Stylelint.
- `ts-jest`: A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.
- `ts-node`: TypeScript execution and REPL for node.js.
- `typescript`: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- `vite`: Next-generation frontend tooling.
- `vite-tsconfig-paths`: Support for TypeScript's path mapping in Vite.

## Test Coverage

Currently, the Santa App has around 5% test coverage, with only a few functions tested. Increasing test coverage is a priority, and contributions are welcome! If you are interested in improving the test coverage, please see the contribution guidelines.

To run the tests and see the current coverage:

```bash
npm run test
```

For generating a test coverage report:

```bash
npm run test:coverage
```

We encourage you to write tests for any new features or areas of the codebase you find are lacking coverage. Every bit helps!

## To-Do List (Future Versions)

Here's a list of tasks planned for future versions of the Santa App:

1. **API Documentation**: Create comprehensive API documentation using tools like Swagger or Postman.
2. **Increase Test Coverage**: Improve test coverage to ensure more robust codebase testing.
3. **Component Testing**: Implement component-level testing using tools like React Testing Library or Enzyme.
4. **Snapshot Testing**: Introduce snapshot testing to ensure UI components render correctly over time.
5. **Internationalization**: Add support for multiple languages using i18n libraries such as react-intl.
6. **Performance Monitoring**: Integrate performance monitoring tools like New Relic or Sentry to track and improve app performance.
7. **Code Analysis and Security Testing**: Configure SonarQube for code analysis and security testing to identify and fix code quality issues.
8. **Dockerization**: Dockerize the application for better portability and easier testing.
9. **CI/CD Implementation**: Implement Continuous Integration and Continuous Deployment (CI/CD) pipelines using GitHub Actions or other CI/CD tools.
10. **Write Guidelines**: Document guidelines for contribution, development, and deployment processes to streamline collaboration and onboarding for new contributors.

Feel free to contribute additional ideas or suggestions for future versions!

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes. [DETAIL GUIDE](./CODE_OF_CONDUCT.md)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Reference

[My React Dashboard boiler plate](https://github.com/nabinstha1234/react-materal-dashboard)

[My React Node Js boilerplate](https://github.com/nabinstha1234/node-mongo-boilerplate-with-firebase-auth)

[Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app/tree/develop)
