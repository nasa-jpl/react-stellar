[![npm version](https://img.shields.io/npm/v/@nasa-jpl/react-stellar.svg)](https://www.npmjs.com/package/@nasa-jpl/react-stellar)

# react-stellar

React implementation of the Stellar design system built on top of the (native CSS Stellar) implementation [https://github.com/nasa-jpl/react-stellar]. The React implementation of the Stellar design system provides a more complete implementation of the Stellar design system whereas the native CSS Stellar only provides styling for native HTML elements as well as CSS variables for color and typography. React Stellar is written in Typescript and bundled with Rollup.

## What is Stellar?

- Stellar is design system for operations tools that enables developers and designers to make use of battle-tested components and focus their efforts on the unique aspects of their applications. Included in this design system are code components, design files and assets, and guidelines for use. Please refer to the Figma
  file [here](https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-Design-System?type=design&node-id=0%3A1&t=hcGqixx7MZ4qSgbd-1) for more documentation about the Stellar design system.

## Component Usage and Demos

Demos and documentation for the components can be found here: https://nasa-jpl.github.io/react-stellar/.
Note that many components are build on top of [Radix Primitives](https://www.radix-ui.com/docs/primitives/overview/getting-started). Radix Primitives provide unstyled, accessible components meant to be used as building blocks for design systems. React Stellar components that use Radix Primitives will contain links to the Radix documentation for more detailed information regarding component properties and usage.

## Developing Components

- TODO, storybook, installing node, etc.

## Build and Publish Component Library

1. Set up your NPM credentials TODO
2. Run `npm run build-lib`. This will run Rollup on the project and output files to `/dist` for consumption.

## Component Library Storybook GH Pages Deployment

Components are developed and demoed using Storybook. Storybook can be run locally and is also built and deployed to Github Pages using Github Actions.

## Component Library Installation

To install the published library follow the steps below. These steps assume you already have NodeJS installed on your machine and that you are installing this library into a React project.

1. Set up your JPL Artifactory credentials using the instructions above.
2. Run `npm install --save-dev @nasa-jpl/react-stellar` in the root of your React application repository.

## Importing Stellar Components in React

You can import a Stellar component using the following ES6 syntax:

```JS
import { Button } from "@nasa-jpl/react-stellar";
```

This component can be used like any other React component, e.g.

```JSX
<Button variant="secondary" onClick={() => console.log("Click")}>
  Text
</Button>
```

## Theming

- Overriding via class name, css variables, dark/light theme, TODO
