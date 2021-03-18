# Breaking Bad Characters [![Deployment](https://github.com/ajinkabeer/breakingbad/actions/workflows/deploy.yaml/badge.svg?branch=master)](https://github.com/ajinkabeer/breakingbad/actions/workflows/deploy.yaml)

This is a simple React project that uses the [BreakingBadAPI](https://breakingbadapi.com/documentation) to display the characters and character details from the TV series Breaking Bad.

- [App-Live-Link](https://ajinkabeer.github.io/breakingbad/#/)

The project uses:

-   [React](https://reactjs.org/docs/getting-started.html) for front-end development.
-   [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) for react dev environment.
-   [TypeScript](https://www.typescriptlang.org/docs/home.html) for type-safety.
-   [Redux Toolkit](https://redux.js.org/api/api-reference) for state management and handling side effects.
    Takes inspiration from libraries like Immer and Autodux to let you write "mutative" immutable update logic, and even create entire "slices" of state automatically.
-   [GitHub Actions and Github Pages](https://github.com/ajinkabeer/breakingbad/actions) for Continuous Deployment.

## Structure of the project

The folder structure of the project looks as follows:

```
src
└── api
└── components
└── css
└── pages
└── store
└── test
└── App.tsx
```

### api

Contains all the api related services.

### components

Contains reusable UI components.


### store

-   selectors: `Selectors` to retrieve and compute derived data from the `Redux state`
-   slices: `Slices` of the `Redux state` which contain `actions` and `reducers`

### css

Contains a basic css file for styling.

## Running

Install dependencies:

```
yarn
```

Start packager:

```
yarn start
```

## Testing

```
yarn test
```