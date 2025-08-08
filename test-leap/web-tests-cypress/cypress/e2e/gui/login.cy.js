import login from "../../support/pages/loginPage";
import home from "../../support/pages/homePage";
import loginMessages from "../../fixtures/messages/msgLogin.json";
import homeMessages from "../../fixtures/messages/msgHome.json";

describe("Login", () => {
  beforeEach(() => {
    cy.accessSite(Cypress.env('LOGIN'))
    cy.validatePage('/login')
  })

  it("CT001 - You must log in with valid credentials", () => {
    login.fillLoginFields(Cypress.env('EMAIL'), Cypress.env('PASSWORD'))
    home.verifyMessage(homeMessages.alertSuccess)
  })

  it("CT002 - Login attempt with invalid credentials", () => {
    login.fillLoginFields(Cypress.env('INVALID_EMAIL'), Cypress.env('PASSWORD'))
    login.verifyMessage(loginMessages.alertError)
  })
})