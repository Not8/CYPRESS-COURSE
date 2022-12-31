describe('Iframes suite demoQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}nestedframes`)
    });
    it('Iframe handling', () => {
        cy.get(`#frame1`).then(function (iFrame){
            const body = iFrame.contents().find('body')
            cy.wrap(body).should('have.text', 'Parent frame')
            cy.wrap(body).find(`iframe[srcdoc='<p>Child Iframe</p>']`).then(function (iFrame2){
                const body2 = iFrame2.contents().find('body')
                cy.wrap(body2).should('have.text', 'Child Iframe')
            })
        })
    });
});

describe.only('Iframes suite heroku', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("herokuApp")}iframe`)
    });
    it('Iframe handling', () => {
        cy.get(`#mce_0_ifr`).then(function (iFrame){
            const body = iFrame.contents().find('body')
            cy.wrap(body).type(`{selectAll}{del}wasd`).should(`have.text`, `wasd`)
        })
    });
});