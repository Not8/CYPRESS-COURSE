describe('Env', () => {
    it('Test', () => {
        cy.log(`Env variable: ${Cypress.env("demoVar")}`)
    });
});