# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn docgen:ts
yarn start
```

This command generates MDX documentation for components, then starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn docgen:ts
yarn build
```

This command generates MDX documentation for components, then generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
yarn docgen:ts
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.