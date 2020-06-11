# Cypress Baby Steps

Everyone is talking about the JavaScript Testing-Framework [Cypress](https://www.cypress.io/) these days.
Let's have a look with a few experiments, what one can do with it. Let's go!

## Why use Cypress
- No other dependencies required to run tests as Cypress contains everything you need.
- Setup is minimal
- Cypress supports BDD and TDD style assertion syntax so this would already be familiar to engineers who have used other JavaScript testing libraries.
- Cypress Test Runner is useful in debugging your tests. You can also directly inspect from Chrome dev tools.  

## Requirements
Make sure you have the following installed on your machine:

- [Node](https://nodejs.org) (The JavaScript runtime environment)
- [NPM](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/) (Node Package Manager)

## Libraries and plugins used
- [Cypress](https://www.cypress.io/)
- [TypeScript](https://docs.cypress.io/guides/tooling/typescript-support.html#Install-TypeScript)
- [Cucumber-Preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
- [cy-api](https://github.com/bahmutov/cy-api)

## Cucumber
The lib [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor), makes it possible
to use feature files and [gherkin-syntaxed](https://www.guru99.com/gherkin-test-cucumber.html) specs to implement tests.
The biggest advantage of writing tests in Gherkin is, that they are simple enough for non-programmers to be understood.

## Cypress Recorder
With the [Cypress Recorder](http://www.cypressrecorder.com/) Chrome extension, you can record a Cypress web session.
This extension may help you to speed up the development of your test scripts.

## API Testing
Compared to UI-Testing where we interact with the UI elements of an application, in [API Testing](https://www.edureka.co/blog/what-is-api-testing)
we call with [HTTP requests](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) the applications business layer
and verify its responses. The plugin [cy-api](https://github.com/bahmutov/cy-api) adds the custom command `cy.api` 
to Cypress to additionally support API testing.
In the spec file ``sample_api.spec.js`` you will find some example tests. These tests run against
http://jsonplaceholder.typicode.com and https://restful-booker.herokuapp.com.

## Cypress Testing Library
The [cypress testing library](https://github.com/testing-library/cypress-testing-library) extends the cypress command ``cy`` with some useful find... functions.
A complete list of all the available library definitions can be found [here](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/testing-library__cypress/index.d.ts).
There is also a main Testing Library site made by [Kent C. Dodds](https://twitter.com/kentcdodds ) which you can find [here](https://testing-library.com/).

## How to run
* Clone this repo and install the project dependencies with:
`npm install` or `npm i`
* To run the tests against the [Cypress Test Runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview), hit: `npm run cypress:open` or `npx cypress open`
    * Once the test runner has loaded, click on the feature or spec file you wish to run.
* To run the tests from the terminal, hit:
`npm run cy:test`
* To run all the tests headless (without the Cypress Test Runner), hit: `npx cypress run`

## References
Initial ideas for this project are taken from [Marie Drake](https://github.com/mdcruz)

## Learning Resources
- If one wants to learn more about the world of Testing in JavaScript, [Testing JavaScript](https://testingjavascript.com/) seems to be THE
place to explore.
- [The Most Common Cypress Mistakes](https://christianlydemann.com/the-most-common-cypress-mistakes/)
- [JSDOM](https://testing-library.com/docs/dom-testing-library/intro)