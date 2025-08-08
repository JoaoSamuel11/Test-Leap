import { login } from "./elements/login";

Cypress.Commands.add("accessSite", (route) => {
  const environment = Cypress.env('ENV')
  const baseUrl = Cypress.env(`${environment}_URL`)
  cy.visit(`${baseUrl}/${route}`)
})

Cypress.Commands.add("validatePage", (url) => {
  cy.url().should('include', url)
})

Cypress.Commands.add("login", () => { 
  cy.accessSite('login');
  login.fillLoginFields(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
})

Cypress.Commands.add('setCookies', () => {
  const cookieName = `${Cypress.env('NEXT_AUTH_SESSION')}`;

  cy.getCookie(cookieName).then((cookie) => {
    if (cookie) {
      cy.setCookie(cookie.name, cookie.value, {
        domain: cookie.domain,
        expiry: cookie.expiry,
        httpOnly: cookie.httpOnly,
        path: cookie.path,
        secure: cookie.secure,
      })
    }
  })
})

Cypress.Commands.add("sessionLogin", (username, password) => {
  cy.session("userSession", () => {
    cy.intercept("GET", `${Cypress.env('PROVIDERS')}`).as("providers")
    cy.intercept("POST", `${Cypress.env('CREDENTIALS')}`).as("credentials")
    cy.intercept("GET", `${Cypress.env('CSRF')}`).as("csrf")
    cy.intercept("GET", `${Cypress.env('SESSION')}`).as("session")
    cy.intercept("GET", `${Cypress.env('RSC')}`).as("rsc")

    cy.accessSite("login")

    cy.get(login.emailField).type(username)
    cy.get(login.passField).type(password)
    cy.get(login.submitBtn).contains("Entrar").click()

    cy.setCookies()

    cy.wait(["@providers", "@credentials", "@csrf", "@session", "@rsc"])
  })
})