/// <reference types="cypress" />

describe('index route', () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it('should have my name', () => {
        cy.get('h1').should('have.text', 'Stokes Player');     
    });

    it('should have a link to LinkedIn', () => {
        cy.get('a').should('have.attr', 'href');
    });

    it('should have an image', () => {
        cy.get('img').should('exist');
    });

});