describe('empty spec', () => {
  before(() => {
    cy.log('Hi!')
  })
  after(() => {
    cy.log("Bye!")
  })
  beforeEach(() => {
    cy.log('Before all tests')
  })
  afterEach(() => {
    cy.log('After all tests')
  })
  it('test1', () => {
    cy.log('Hello world!')
  })
  it('test', () => {
    cy.log('Hello world1!')
  })
})
describe('spec wasd', () => {
  it.skip('test1', () => {
    cy.log('Hello!')
  })
})