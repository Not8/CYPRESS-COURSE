describe('Mobile', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("globalSqa")}angularjs-protractor-practice-site`)
    });
    it('Test', () => {
        cy.viewport('iphone-x')
        cy.get('#mobile_menu_toggler').should('be.visible')
    });
});