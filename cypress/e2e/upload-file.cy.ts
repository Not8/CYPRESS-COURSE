describe('Upload files demoQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}upload-download`)
    });
    it('Upload file', () => {
        cy.get('#uploadFile').attachFile('example.json')
        cy.get(`#uploadedFilePath`).should('be.visible')        
    });
});