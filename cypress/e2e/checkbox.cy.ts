describe.skip('Checkbox demoQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}checkbox`)
    });
    it('Test', () => {
        //cy.get('input[type="checkbox"]').click({force: true}).get('#result').should('contain.text', 'You have selected')
        cy.get('.rct-checkbox').click().get('#result').should('contain.text', 'You have selected')
    });
});

describe('Checkbox heroku', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("herokuApp")}checkboxes`)
    });
    it('Test', () => {
        cy.xpath("(//input[@type='checkbox'])[1]").click().should("be.checked")
        cy.xpath("(//input[@type='checkbox'])[2]").click().should("not.be.checked")
    });
});