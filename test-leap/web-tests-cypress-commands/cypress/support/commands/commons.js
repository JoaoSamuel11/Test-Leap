Cypress.Commands.add("visitPage", (route) => {
    cy.visit(`${Cypress.env("BASE_URL")}/${route}`)
})

Cypress.Commands.add("verifyMessage", (el, message) => {
  cy.get(el)
    .should('be.visible')
    .should('have.text', message)
})