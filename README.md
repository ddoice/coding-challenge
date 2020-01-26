
This repo holds both frontend and backend, kinda monorepo style.

Was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Express Generator](https://expressjs.com/es/starter/generator.html).

# Requisites

* node v10+
* MongoDB v3+

You can launch a mongo db container with docker:
```shell
docker run -d -p 27017:27017 -v ~/data:/data/db mongo
```

## BackEnd

Express server its located into the server/ folder, to launch it:

```shell
cd server
npm ci
npm start
```

### `npm start`

Runs the server in the development mode.<br />

### `npm run test`

Launches the tests.<br />

### `npm run coverage`

Launches the tests and displays a coverage report.<br />

### `npm run coverage_html`

Launches the tests, displays a coverage report into screen and opens the coverage report into the default browser.<br />


### `npm run coverage`


## FrontEnd

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />