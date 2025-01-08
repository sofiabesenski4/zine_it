describe('template spec', () => {
  it('passes', () => {
    // TODO: Get SSL set up.
    cy.visit('http://localhost:3000/')
    let title = `TestZine ${Date.now()}`
    const allZines = '[data-test="zine"]'
    cy.get(allZines).should($z => {
      expect($z).to.not.contain(title)
    })

    cy.contains('New Zine').click()
    cy.get('input').type(title)
    cy.contains('Save').click()

    cy.get(allZines).should($z => {
      expect($z).to.contain(title)
    })

    cy.contains(title).click()
    cy.contains('Delete Zine').click()

    cy.get(allZines).should($z => {
      expect($z).to.not.contain(title)
    })
  })
})
