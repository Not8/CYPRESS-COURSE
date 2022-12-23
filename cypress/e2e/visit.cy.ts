describe('Basics', () => {
  beforeEach(() => {
    cy.visit('/textinput')
  })
  it('visit', () => {
    cy.log('Hello')
  })
  it ('Get url', () => {
    cy.url().then((url)=>{
      cy.log(url)
      expect(url).to.equals('http://uitestingplayground.com/textinput')
    })
  })
  it('Tittle validation', ()=>{
    cy.title().then((title) => {
      expect(title).to.equals("Text Input")
    })
  })
  it('Challenge 1', () => {
    cy.get('input#newButtonName').type("Hi")
    cy.get('button#updatingButton').click().should('have.text', 'Hi')
  })
})