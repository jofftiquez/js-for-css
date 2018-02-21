# es6-starter
ES6, babel, webpack, rollup project starter.

**Start**

Write all of your ES6 shits in the `src` folder.

**Build**

*Webpack*

To transpile your ES6 code to ES5 use the command `npm run build:webpack`. This will create a `commonjs2` ES5 version (usable for nodejs `required()` or `import`) of your code from `src` in the `dist` folder.

**Test** *(not unit test)*

To test your transpiled code, run the command `npm run test:runscript`. This simply will run the transpiled code from the `dist` folder.

**Commands**

`npm run start:dev` or `yarn start:dev` - runs the build script with `--watch` flag.
`npm run build:webpack` or `yarn build:webpack` - builds the code from `src` using webpack.
`npm run test:runscript` or `yarn test:runscript` - will run the code from `dist` folder using nodejs.