describe('Tooltips suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}tool-tips`)
    });
    it('Tooltips example test', () => {
        cy.get(`#toolTipButton`).realHover()
        cy.get(`div[class="tooltip-inner"]`).should(`be.visible`)
        cy.contains(`a`, `Contrary`).realHover()
        cy.get(`div[class="tooltip-inner"]`).should(`be.visible`)
    });
});