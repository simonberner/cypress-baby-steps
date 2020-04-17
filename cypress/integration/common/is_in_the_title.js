import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`{string} is in the title`, (title) => {
    cy.title().should('include', title)
})