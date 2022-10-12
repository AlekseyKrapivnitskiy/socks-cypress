describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe('My first test', () => {
  it('Does not match', () => {
    expect(true).to.equal(true)
  })
})