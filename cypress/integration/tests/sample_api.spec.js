/// <reference types="@bahmutov/cy-api" />

describe('The JSONPlaceholder API', () => {
    it('loads all the posts successfully', () => {
        cy.api({url: '/posts'}).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(100);
        });
    });

    it('loads the correct amount of posts per user', () => {
        cy.api({url: '/posts?userId=9'}).its('body').should('have.length', 10);
    });

    it('should add a new post successfully', () => {
        cy.api({
            method: 'POST',
            url: '/posts?userId=9',
            body: {
                userId: 9,
                title: 'Baby Steps with Cypress',
                body: 'Everyone is using Cypress these days!',
            },
        }).then((response) => {
            expect(response.status).to.equal(201);
            expect(response.body.id).to.equal(101);
        });
    });

    it('should delete a post successfully', () => {
        cy.api({method: 'DELETE', url: '/posts/9'})
            .its('status')
            .should('be.equal', 200);
    });
});

describe('The Restful-Booking API', () => {

    it('loads all the bookings successfully', () => {
        cy.api({url: 'https://restful-booker.herokuapp.com/booking'}).then((res) => {
            expect(res.status).to.equal(200);
            expect(res.body.length).to.equal(11);
        });
    });

    it('should create a new booking successfully', () => {
        cy.api({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                firstname: "Sally",
                lastname: "Brown",
                totalprice: 111,
                depositpaid: true,
                additionalneeds: "Breakfast",
                bookingdates: {
                    checkin: "2025-02-23",
                    checkout: "2025-10-23"
                }
            },
        })
            .then((res, messages) => {
                expect(res.status).to.equal(200);
                // TODO: assert the response-body
            });
    });

    // TODO: add basic auth
    it('should delete a booking successfully', () => {
        cy.api({method: 'DELETE', url: 'https://restful-booker.herokuapp.com/booking/1'})
            .its('status')
            .should('be.equal', 200);
    });

});