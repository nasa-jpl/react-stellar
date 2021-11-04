# react-stellar

React implementation of the Stellar design system. Written in Typescript and bundled with Rollup, sunshine, and rainbows.

## What is Stellar?

- Stellar is design system for operations tools that enables developers and designers to make use of battle-tested components and focus their efforts on the unique aspects of their applications. Included in this design system are code components, design files and assets, and guidelines for use.
- Links to Figma
  - Main Figma file: https://www.figma.com/file/a696svN2S7YNlZRYAkeLob/Stellar-2.0?node-id=1%3A2
- Who uses Stellar?
  - Mars 2020 GDS tools (ASTTRO, COCPIT, Marsviewer, Meeting Tracker, RASCAL, and more)
  - AMMOS (Merlin, others?)
  - Europa Clipper (?)
  - Screenshots would be nice :)
- Stellar Implementations
  - React
  - Angular
  - Vue..?
  - Vanilla JS + CSS? Maybe? Won't be as fancy though.

## Component Usage and Demos

Demos and documentation for the components can be found here: https://github.jpl.nasa.gov/pages/stellar/react-stellar/.

## Developing Components
- TODO, storybook, installing node, etc.
## Setting up Artifactory NPM

To publish and install the library follow the steps below. This step only has to be done once per machine so you can skip it if you've already done this for another project. Make sure your `~/.npmrc` contains the right registry!

1. Open your [profile page](https://artifactory.jpl.nasa.gov/artifactory/webapp/#/profile) in the CAE Artifactory web interface.
2. Unlock your profile information with your LDAP password.
3. Copy the API Key.
4. Run the following curl command, replacing `<USERNAME>` and `<API_KEY>` with your LDAP username and your API Key.
     ```
     curl -u <USERNAME>:<API_KEY> https://cae-artifactory.jpl.nasa.gov/artifactory/api/npm/auth
     ```
5. The above command should output `_auth`, `always-auth`, and `email` entries. Add them to your `~/.npmrc` file.
6. In addition, add a scoped NPM registry to your `~/.npmrc` to point NPM to JPL Artifactory for stellar installation.
     ```
     @gov.nasa.jpl.stellar:registry=https://artifactory.jpl.nasa.gov/artifactory/api/npm/npm-release-virtual/
     ```
7. After performing the above steps, your `~/.npmrc` file should look similar to the following, but with different values:
     ```
     @gov.nasa.jpl.stellar=https://cae-artifactory.jpl.nasa.gov/artifactory/api/npm/npm-release-virtual/
     _auth=TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4
     always-auth=true
     email=John.Doe@jpl.nasa.gov
     ```
8. You are now setup to install NPM dependencies which reside in JPL Artifactory. Running `npm install` should work as expected.

## Component Library NPM Publishing

This repository is published to JPL Artifactory as an npm module for use by other projects.

1. Set up your JPL Artifactory credentials using the instructions above.
2. Run `npm run build-lib`. This will run Rollup on the project and output files to `/dist` for consumption.

## Component Library Storybook GH Pages Deployment

Components are developed and demoed using Storybook. Storybook can be run locally and can be built and deployed to Github Pages for easy viewing by running `npm run deploy-storybook`.
## Component Library Installation

To install the published library follow the steps below. These steps assume you already have NodeJS installed on your machine and that you are installing this library into a React project.

1. Set up your JPL Artifactory credentials using the instructions above.
2. Run `npm install --save-dev @gov.nasa.jpl.stellar/react-stellar` in the root of your React application repository.

## Importing Stellar Components in React

You can import a Stellar component using the following ES6 syntax:

```JS
import { Button } from "@gov.nasa.jpl.stellar/react-stellar";
```

This component can be used like any other React component, e.g.

```JSX
<Button variant="secondary" onClick={() => console.log("Click")}>
  Text
</Button>
```

## Theming

- Overriding via class name, css variables, dark/light theme, react theme provider component
