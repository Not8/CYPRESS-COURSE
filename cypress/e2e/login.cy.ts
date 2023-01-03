import { LoginObject } from "../pages/Login";

Cypress.session.clearAllSavedSessions();

describe('Login suite', () => {
    beforeEach(() => {
        LoginObject.visit()
    });
    it('Login example 1', () => {
        const username = `test`
        const password= `Test1234*`
        cy.login(username, password)
        cy.url().should(`contain`, `profile`)
        cy.xpath(`//div[@class='main-header']`).should(`have.text`, `Profile`)
        cy.get(`#userName-value`).should(`have.text`, username)
    });
});