describe('Dynamic table suite', () => {
    beforeEach(() => {
        cy.visit('dynamictable')
    });
    it('First approach', () => {
        cy.get('div[role="row"]')
        .contains("Chrome")
        .parent()
        .contains("%")
        .then((cell) => {
            cy.get(".bg-warning").should("contain", cell.text());
        });
    });
});