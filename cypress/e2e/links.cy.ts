describe('Links suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}links`)
    });
    it('Link test1', () => {
        cy.get(`#simpleLink`).should('have.attr', 'href', `https://demoqa.com`)
        .should('have.attr', 'target', '_blank')
    });
    it('Link test2', () => {
        cy.get(`#simpleLink`).invoke('removeAttr','target').click()
        cy.url().then((url) => {
            expect(url).to.equal(`${Cypress.env("demoQA")}`)
        })
    });
});