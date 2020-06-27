/// <reference types="cypress" />

//const viewports = ['macbook-15', 'ipad-2', 'iphone-x'ipad-2', 'iphone-x'];
const viewports = ['macbook-15'];

describe('Axe', () => {
    viewports.forEach((viewport) => {
        it(`should detect accessibility issues on the entire page - ${viewport}`, () => {
            cy.viewport(viewport);
            cy.visit('https://www.mimacom.com/en/');
            cy.injectAxe();

            // Without any parameters, this will check the entire page
            cy.checkA11y();

            // If you want to exclude certain elements
            // cy.checkA11y({ exclude: ['#menu'] });

            // If you only want to check a specific element
            // cy.checkA11y('#content');

            // If you want to disable some rules
            // cy.checkA11y(
            //   {},
            //   {
            //     rules: {
            //       'page-has-heading-one': { enabled: false },
            //     },
            //   }
            // );
        });
    });
});