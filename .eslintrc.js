module.exports = {
    "installedESLint": true,
    "parser" : "babel-eslint",
    "parserOptions" : {
      "sourceType": "module",
      "allowImportExportEverywhere": false,
    },
    "import/resolver": "meteor",
    "extends": [
      "meteor",
      "airbnb",
    ],
    "plugins": [
      "react",
      'meteor',
    ],
    "env": {
      "browser": true,
      "node": true,
      "meteor": true,
      "mongo": true,
    },
    "rules": {
      "indent": ["error", 2],
      "no-unused-vars": 1,
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": [
         2, { "ignore": ["^meteor/"] }
      ],
      "keyword-spacing": 0,
      "space-after-keywords": 0,
      "space-return-throw-case": 0,
    },
};
