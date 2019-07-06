Will it work? Format on save in VS Code via Prettier based on ESLint rules for TypeScript + Standard.js

The goal of the repository is to get this working:

- Have [ESLint rules for TypeScript + standard.js](https://www.npmjs.com/package/eslint-config-standard-with-typescript) defined
- Have [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in VS Code installed
- Have [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) in VS Code installed
- Have `editor.formatonsave` enable
- Most of the following ESLint warnings get fixed when saving the `.ts` files in this repository:

```bash
yarn lint
yarn run v1.16.0
$ node_modules/.bin/eslint '{src,test}/**/*.{js,ts}'

/Users/alexzeitler/src/alex/vscode-prettier-eslint-typescript/src/GetEnvTyped.ts
  4:3   error  Interface has only a call signature - use 'type SimpleConstructor<T extends SimpleType> = (value: any) => T;' instead  @typescript-eslint/prefer-function-type
  4:19  error  Unexpected separator (;)                                                                                               @typescript-eslint/member-delimiter-style
  7:45  error  Missing space before function parentheses                                                                              space-before-function-paren
  7:92  error  Trailing spaces not allowed                                                                                            no-trailing-spaces
  8:33  error  Extra semicolon                                                                                                        semi
  9:2   error  Newline required at end of file but not found                                                                          eol-last

/Users/alexzeitler/src/alex/vscode-prettier-eslint-typescript/test/GetEnvTypedTests.ts
  9:30  error  Extra semicolon  semi

✖ 7 problems (7 errors, 0 warnings)
  7 errors and 0 warnings potentially fixable with the `--fix` option.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

Have an idea how to get it fixed? Please send a PR 🙏
