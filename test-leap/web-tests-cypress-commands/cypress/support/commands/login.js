import { login } from "../elements/login";

Cypress.Commands.add("fillLoginFields", (email, password) => { 
   cy.get(login.emailField).type(email)
   cy.get(login.passField).type(password)
   cy.get(login.submitBtn).click()
})