describe('Locators', () => {
  beforeEach(() => {
    cy.visit('/dynamicid')
  })
  it('Contains example', () => {
    cy.contains("Button with Dynamic ID").should('have.text', 'Button with Dynamic ID')
  })
  it('Get & Find', () => {
    cy.get('div').get('button')
  })
  it('Css', () => {
    cy.get('button[class="btn btn-primary"]').should('have.text', 'Button with Dynamic ID')
  })
  it('Css2', () => {
    cy.get('.btn-primary').should('have.text', 'Button with Dynamic ID')
  })
})