describe.skip('Click change', () => {
    beforeEach(() => {
        cy.visit('/click')        
    });
    it('Click', () => {
        cy.get('#badButton').click().should('have.class', 'btn-success')
    });
    it('Assert', () => {
        cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(40, 167, 69)')        
    });
});

describe('Hover over', () => {
    it('Test', () => {
        cy.visit('mouseover')
        cy.get(".text-primary").realHover()
    });
});