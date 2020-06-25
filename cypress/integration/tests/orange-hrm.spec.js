/// <reference types="cypress" />

describe('The Orange HRM', () => {


    beforeEach(() => {
        // Given
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    });

    it('should let me login', () => {
        // When
        cy.findByText('Username').type("Admin");
        // does not work because the element is not visible
        // cy.findByText('Password').type('admin123');
        // does not work because the element is not typeable
        // cy.findByText('Password').type('admin123', {force: true});
        // see https://docs.cypress.io/api/cypress-api/custom-commands.html#Overwrite-type-command
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').click();
        // Then
        cy.get('#menu_dashboard_index').should('have.text', 'Dashboard');
    });


});