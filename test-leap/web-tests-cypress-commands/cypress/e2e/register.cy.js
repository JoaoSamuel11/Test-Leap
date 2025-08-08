import { register } from '../support/elements/register';

const Chance = require('chance');
const chance = new Chance();

describe('Register', () => {
  beforeEach(() => {
    cy.visitPage('cadastro')
  })

  it('Register successful', () => {
    cy.fillRegisterFields(chance.name(), chance.email(), Cypress.env("PASSWORD"))
    cy.verifyMessage(register.alertMessage, "Usuário inserido com sucesso")
  })
})