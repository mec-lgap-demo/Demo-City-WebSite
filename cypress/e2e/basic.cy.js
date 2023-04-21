describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates to the product page', () => {
    cy.get('a[href="/products"]').eq(0).click();
    cy.url().should("include", "/products")
    cy.get('h1').contains(/Our Coffee/i)
  })

  it('navigates to the values page', () => {
    cy.get('a[href="/values"]').eq(0).click();
    cy.url().should("include", "/values")
    cy.get('h1').contains(/Values/i)
  })
})

