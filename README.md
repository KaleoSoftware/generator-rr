generator-react-redux
==========

*Good* React+Redux scaffolding generator.

1. Fork [generator-rr-boilerplate()
2. `npm install`
3. `npm run start`

Congrats, you've just created a hot-reloaded universal React+Redux app, ready to be molded into the next-big-thing :)

## What is the meaning of all this?!

- static -- Contains any static files *and* the compiled bundle.js, to keep things simple
- src -- The source! :)
  - actions -- Action creators
  - components -- Vanilla React components in here
  - constants
    - ActionTypes.js -- All the action types in here.
    - URLs.js -- All URL-generators go in here (for [redux-fetch-dispatch](https://github.com/KaleoSoftware/redux-fetch-dispatch))
  - containers -- All the [react-redux](https://github.com/rackt/react-redux) containers.
  - i18n -- [react-intl](https://github.com/yahoo/react-intl) stuff. `intlData.js` gets passed to the `<IntlProvider>` in `index.jsx`.
  - reducers -- Reducers!
  - App.js -- The App component (used in both client/server rendering)
  - client.js -- The client renderer
  - Html.js -- The HTML component the server renders for server-side rendering
  - routes.js -- The routes passed to [react-router]
  - server.js -- The actual [Express] server, for both development and production
  - shared.js -- Exports configureStore(), which configures the store using all the middleware, as well as the [history]() object used by [react-router]
  - theme.js -- The [Material-UI](http://www.material-ui.com/#/) theme.
- test -- Everything related to testing. *.spec.js files automatically get run by the test runner
  - actions
  - fixtures -- Fixtures used for tests (static returns from the api, etc.)
  - reducers
- .babelrc, .editorconfig, .eslintrc, .gitignore, webpack.config.*.js -- Config files.
- server.js -- Loads /src/server.js using [Babel]() and [webpack-isomorphic-tools]()
-- server.babel.js -- Babel configuration for the server, so you can use es2016 in /src/server.js

## Scaffolding commands

### Actions
```
npm install -g generator-rr

yo rr:action group name
yo rr:component name [group]
yo rr:container name
yo rr:reducer name
yo rr:reducer-test name action_group action
```

## Thanks!! :)

## License
MIT
