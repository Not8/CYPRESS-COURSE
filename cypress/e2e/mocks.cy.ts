import { LoginObject } from "../pages/Login";

Cypress.session.clearAllSavedSessions()
describe('Mocking data test', () => {
    beforeEach(() => {
        LoginObject.visit()
        const username = `test`
        const password= `Test1234*`
        cy.login(username, password)
        cy.intercept('GET', `${Cypress.env("demoQA")}Account/v1/User/7d01de84-9527-4855-a10c-043a637178b3`,
            {fixture: "mock.json"}).as(`mockdemo`)
    });
    it('Mock data', () => {
        cy.wait(`@mockdemo`)
        cy.get(`#userName-value`).should(`have.text`, `Joan`)
        cy.get(`a[href='/profile?book=9781449325862']`).should(`have.text`, `Git`)
        cy.get(`a[href='/profile?book=9781449331818']`).should(`have.text`, `JavaScript`)
    });
});