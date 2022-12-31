describe('Download file suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}upload-download`)
    });
    it('Download file', () => {
        cy.get('#downloadButton').click().verifyDownload('sampleFile.jpeg')        
    });
});