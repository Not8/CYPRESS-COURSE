describe('Autocomplete suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}auto-complete`)
    });
    it('Autocomplete example test', () => {
        cy.get(`#autoCompleteMultipleContainer`).type(`Y`)
        cy.contains(`#react-select-2-option-0`, `Yellow`).click()
        cy.get(`.css-12jo7m5.auto-complete__multi-value__label`).should(`have.text`, `Yellow`)
    });
});