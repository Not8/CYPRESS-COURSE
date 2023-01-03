describe('Droppable suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}droppable`)
    });
    it('Droppable example 1', () => {
        cy.get(`#draggable`).drag(`#droppable`, {force: true})
        cy.get(`div[id='simpleDropContainer'] p`).should(`have.text`, `Dropped!`)
    });
    it.only('Droppable example 2', () => {
        cy.get(`#droppableExample-tab-preventPropogation`).click()
        cy.get(`#dragBox`).drag(`#notGreedyDropBox`, {force: true})
        //cy.get(`#notGreedyDropBox`).first().should(`have.text`, `Dropped!`)
        cy.get(`#dragBox`).drag(`#notGreedyInnerDropBox`, {force: true})
        cy.get(`div[id='notGreedyInnerDropBox'] p`).should(`have.text`, `Dropped!`)
    });
});