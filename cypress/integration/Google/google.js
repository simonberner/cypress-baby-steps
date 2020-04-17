import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('the Google page is opened', () => {
    cy.visit(url)
})