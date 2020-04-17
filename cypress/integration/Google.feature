Feature: A Google Cypress search

  I want to open the Google search page and search for Cypress

  @focus
  Scenario: Opening the Google search page and search for Cypress
    Given the Google page is opened
    And a search for "cypress" is made
    Then "cypress" is in the title