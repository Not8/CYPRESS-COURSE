Cypress.config("defaultCommandTimeout", 17000)
describe('Waiting', () => {
    beforeEach(() => {
        cy.visit('/clientdelay')
    });
    it.skip('Visit waiting', () => {
        cy.get('#ajaxButton').click()
        cy.get('.bg-success').should('have.text', 'Data calculated on the client side.')
    });
    it('Progress bar', () => {
        cy.visit('/progressbar')
        cy.get('#startButton').click()
        cy.get('.progress', {timeout:30000}).should('have.text', '100%')
    });
});