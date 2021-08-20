## Simple Bug Tracking application

Electron application that uses mongoDB and react to track issues.

### Install

#### Clone this repo

```
git clone https://github.com/bradtraversy/simple-electron-react.git
```

#### Install dependencies

```
npm install
```

or

```
yarn
```

#### Set up database connection

Change the database connections in the .env file to match the mongo database you want to use before running

### Usage

#### Run the app

```
npm run start
```

or

```
yarn start
```

#### Build the app (automatic)

```
npm run package
```

or

```
yarn package
```

#### Build the app (manual)

```
npm run build
```

or

```
yarn build
```

#### Test the app (after `npm run build` || `yarn run build`)

```
npm run prod
```

```
yarn prod
```

### Change app title

Change the app title in the **webpack.build.config.js** and the **webpack.dev.config.js** files
