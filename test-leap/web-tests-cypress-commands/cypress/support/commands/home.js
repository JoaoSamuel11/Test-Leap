import { home } from "../elements/home";

Cypress.Commands.add("VerifyMessage", (txt) => { 
   cy.get(home.welcomeMessage)
      .should('be.visible')
      .should('have.text', txt)
   })