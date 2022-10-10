describe('Details', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('hidden item').should('not.be.visible')
  })
})
