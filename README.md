# Prerequisites

1. nodejs 10.x above and npm 5.x above version
2. install git and enable bash shell
3. if you are using windows you can download [git-bash](https://git-scm.com/downloads) to install.

# Develop

open the root directory and create dev.env file, the content is the same with example.env then run

```
npm start

```

# Build
open the root directory and create test.env or production.env file, the content is the same with example.env set the environment value sa you want and then run

```
NODE_ENV=test(production) npm run build
```

# Explanation

## package.json

#### what is scripts?

you can write some other scripts to use by running npm run the "attribute". Say like in our package.json scripts, we have start and build so that you can use command: npm run start and npm run build

##### what is dependencies and devDependencies?

They are used for managing all your modules and when you try to run npm install then you can download them into node_modules directory. The difference for dependencies and devDependencies is that mostly we put the module that you use to build then put that into dependencies, if you use module to compile or parse then put them into devDependencies

## webpack

[webpack](https://webpack.js.org/) is used for compile and bundle your modules. You can see that we use babel-loader to transform js files. css-loader and postcss-loader to transform css and pcss file, file-loader to transform images.

we use @babel/plugin-proposal-decorators and @babel/plugin-proposal-class-properties to support decorator and es6 class properties

## eslint

[eslint](https://eslint.org/) is used for analyzing your code to quickly find problems. And define coding style so that all contributions are in same pattern.
