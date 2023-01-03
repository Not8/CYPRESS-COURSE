import { LoginObject } from "../pages/Login";

Cypress.session.clearAllSavedSessions()
describe('Global hook cookies suite', () => {
    beforeEach(() => {
        LoginObject.visit()
        const username = `test`
        const password= `Test1234*`
        cy.login(username, password)
    });
    it.skip('Success login preserved', () => {
        
    });
    it('Counting cookies', () => {
        cy.getCookies().then((cookies) => {
            cy.log(`Cookies: `, cookies)
        })
    });
});