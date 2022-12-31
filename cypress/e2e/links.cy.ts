describe('Links suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}links`)
    });
    it.skip('Link test1', () => {
        cy.get(`#simpleLink`).should('have.attr', 'href', `https://demoqa.com`)
        .should('have.attr', 'target', '_blank')
    });
    it.skip('Link test2', () => {
        cy.get(`#simpleLink`).invoke('removeAttr','target').click()
        cy.url().then((url) => {
            expect(url).to.equal(`${Cypress.env("demoQA")}`)
        })
    });
});

describe('API request', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}links`)
        cy.intercept('GET', 'https://demoqa.com/bad-request').as('Request')
    });
    it('API request link', () => {
        cy.get('#bad-request').click()
        cy.wait('@Request').then((response) => {
            expect(response.response.statusCode).to.be.equal(400)
        })
    });
});

describe.only('API request', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("herokuApp")}status_codes`)
        cy.intercept('GET', 'https://the-internet.herokuapp.com/status_codes/404').as('Request')
    });
    it('API request link', () => {
        cy.xpath(`//a[normalize-space()='404']`).click()
        cy.wait('@Request').then((response) => {
            expect(response.response.statusCode).to.be.equal(404)
        })
    });
});