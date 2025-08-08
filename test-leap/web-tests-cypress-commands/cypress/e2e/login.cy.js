describe('Login', () => {
  beforeEach(() => {
    cy.visitPage('login')
  })

  it('Login successful', () => {
    cy.fillLoginFields(Cypress.env("EMAIL"), Cypress.env("PASSWORD"))
    cy.VerifyMessage("Bem vindo, Time qa!")
  })
})