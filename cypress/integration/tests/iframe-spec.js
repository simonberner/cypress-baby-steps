/// <reference types="cypress" />

// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
// https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/blogs__iframes

describe('IFrame Testing in Cypress', () => {
    const contentIframe = 'mce_0_ifr';
    const boldIcon = 'mceu_3';
    const italicIcon = 'mceu_4';
    let text = 'Hello content iFrame!';

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
    });

    it('should let you switch to the iframe', () => {
        cy.switchToIframe(contentIframe)
            .clear()
            .type(text)
            .type('{command}a')
            .should('have.text', text);
        cy.get('@boldIcon').click();
        cy.get('@listIcon').click();
        cy.switchToIframe(contentIframe).find('ul li strong').should('have.text', text);
    });


});