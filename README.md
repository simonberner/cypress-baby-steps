# Cypress Baby Steps

Everyone is talking about the JavaScript Testing-Framework [Cypress](https://www.cypress.io/) these days.
Let's have a look what one can really do with it!

## Libraries and plugins used

- [Cypress](https://www.cypress.io/)
- [TypeScript](https://docs.cypress.io/guides/tooling/typescript-support.html#Install-TypeScript)

## Dependencies

To run the tests, please ensure you have the following installed:

- [Node](https://nodejs.org) (The JavaScript runtime environment)
- [NPM](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) (Node Package Manager)

## Why use Cypress
- No other dependencies required to run tests as Cypress contains everything you need.
- Setup is minimal
- Cypress supports BDD and TDD style assertion syntax so this would already be familiar to engineers who have used other JavaScript testing libraries.
- Cypress Test Runner is useful in debugging your tests. You can also directly inspect from Chrome dev tools.  

([Source](https://github.com/mdcruz))

## How to run

* Clone this repo and install the project dependencies with:
`npm install` (`npm i`)
* To run the tests from the terminal, run:
`npm run cy:test`
* To run the tests against the Cypress Test Runner, hit: `npm run cypress:open`
* Once the test runner has loaded, click on the spec file you wish to test.