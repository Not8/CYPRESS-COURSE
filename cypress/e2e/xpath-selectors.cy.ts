describe('Xpath', () => {
  beforeEach(() => {
    cy.visit('/classattr')
  })
  it('By text', () => {
    cy.xpath(`//*[text()='Correct variant is']`).should('have.text', 'Correct variant is')
  })
  it('By attribute', () => {
    cy.xpath(`//pre[@class=' language-html']`).should('contain.text', 'button')
  })
  it('Scenario', () => {
    cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`)
      .should('have.css', "background-color", 'rgb(0, 123, 255)')
  })
})