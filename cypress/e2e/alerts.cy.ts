describe('Alerts suite', () => {
    beforeEach('Visit de page', () => {
        cy.visit(`${Cypress.env("herokuApp")}javascript_alerts`)
    });
    it('Click alerts', () => {
        //cy.contains("button", "Click for JS Alert").click()
        cy.get(`button[onclick='jsAlert()']`).click()
        cy.on(`window:alert`, (message) => {
            expect(message).to.equal(`I am a JS Alert`)
        })
        cy.on(`window:confirm`, () => true)
        cy.get(`#result`).should(`be.visible`)
    });
    it('Confirm alerts', () => {
        //cy.contains("button", "Click for JS Alert").click()
        cy.get(`button[onclick='jsConfirm()']`).click()
        cy.on(`window:alert`, (message) => {
            expect(message).to.equal(`I am a JS Confirm`)
        })
        cy.on(`window:confirm`, () => true)
        cy.get(`#result`).should(`have.text`, `You clicked: Ok`)
    });
    it('Denie alerts', () => {
        //cy.contains("button", "Click for JS Alert").click()
        cy.get(`button[onclick='jsConfirm()']`).click()
        cy.on(`window:alert`, (message) => {
            expect(message).to.equal(`I am a JS Confirm`)
        })
        cy.on(`window:confirm`, () => false)
        cy.get(`#result`).should(`have.text`, `You clicked: Cancel`)
    });
    it('Prompt alert', () => {
        const text = "Hello world"
        cy.window().then((window) => {
            cy.stub(window, "prompt").returns(`Var: ${text}`)
            cy.get(`button[onclick='jsPrompt()']`).click()
        })
        cy.get('#result').should(`contain.text`, text)
    });
});