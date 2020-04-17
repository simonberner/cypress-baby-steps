import {And} from "cypress-cucumber-preprocessor/steps";

And(`a search for {string} is made`, (search) => {
    cy
        .get('[name="q"]')
        .type(search)
        .get('[name="btnK"]')
        .click({force: true, multiple: true})
})
