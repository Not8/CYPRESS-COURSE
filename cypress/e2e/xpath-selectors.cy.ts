describe('Xpath', () => {
  beforeEach(() => {
    cy.visit('/classattr')
  })
  it('By text', () => {
    cy.xpath(`//*[text()='Correct variant is']`).should('have.text', 'Correct variant is')
  })
})