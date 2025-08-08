import { register } from "../elements/register";

Cypress.Commands.add("fillRegisterFields", (name, email, password) => { 
   cy.get(register.nameField).type(name)
   cy.get(register.emailField).type(email)
   cy.get(register.passField).type(password)
   cy.get(register.registerBtn).click()
})