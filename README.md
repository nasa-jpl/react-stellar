# react-stellar

React implementation of the Stellar design system. Written in Typescript and bundled with Rollup, sunshine, and rainbows.

## What is Stellar?

- Stellar is design system for operations tools that enables developers and designers to make use of battle-tested components and focus their efforts on the unique aspects of their applications. Included in this design system are code components, design files and assets, and guidelines for use.
- Links to Figma
  - Main Figma file: TODO
- Who uses Stellar?
  - Mars 2020 GDS tools (ASTTRO, COCPIT, Marsviewer, Meeting Tracker, RASCAL, and more)
  - AMMOS (Merlin, others?)
  - Europa Clipper (?)
  - Screenshots would be nice :)
- Stellar Implementations
  - Base Stellar
  - React

## Component Usage and Demos

Demos and documentation for the components can be found here: https://github.com/pages/stellar/react-stellar/.

## Developing Components

- TODO, storybook, installing node, etc.

## Build and Publish Component Library

1. Set up your NPM credentials TODO
2. Run `npm run build-lib`. This will run Rollup on the project and output files to `/dist` for consumption.

## Component Library Storybook GH Pages Deployment

Components are developed and demoed using Storybook. Storybook can be run locally and can be built and deployed to Github Pages for easy viewing by running `npm run deploy-storybook`.

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
