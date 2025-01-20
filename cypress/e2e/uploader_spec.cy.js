describe('template spec', () => {
  it('passes', () => {
    // TODO: Get SSL set up.
    cy.visit('http://localhost:3001/')
    cy.contains('Anarchy 300').should('not.exist')

    cy.contains('New Zine').click()
    cy.get('input').type('Anarchy 300')
    cy.contains('Save').click()

    cy.get('[data-test="zine"]')
      .contains('Anarchy 300')

    cy.contains('Anarchy 300').click()
    cy.contains('Delete Zine').click()
    cy.contains('Anarchy 300').should('not.exist')
  })
})
