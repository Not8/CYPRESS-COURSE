describe('Accordian suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}accordian`)
    });
    it('Accordian example', () => {
        cy.get(`#section3Heading`).click()
        cy.get(`#section1Heading`).next().should('have.css', 'display', 'none')
        cy.get(`#section3Heading`).next().should('have.css', 'display', 'block').and('have.class', 'show')
    });
});