Cypress.Commands.add('login',(user)=>{
    cy.api({
      url: 'auth/login',
      method: 'POST',
      body: user,
      failOnStatusCode: false
    }).then(response => { return response })
  })

  Cypress.Commands.add("getToken", () => {
    cy.api({
      url: '/auth/login',
      method: 'POST',
      body: {
        email: Cypress.env("email_adm"),
        password: Cypress.env("password_adm"),
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200)
      Cypress.env("token", response.body.access_token)
    })
  })

  Cypress.Commands.add("createUser", (user) => {
    cy.api({
      method: 'POST',
      url: '/users',
      body: user,
      headers: { Authorization: `Bearer ${Cypress.env("token")}` },
      failOnStatusCode: false
    }).then((response)=>{
      Cypress.env("id_user", response.body.id)
    })
  })

  Cypress.Commands.add("deleteUser", () => {
    cy.api({
      method: 'DELETE',
      url: `/users/${Cypress.env("id_user")}`,
      headers: { Authorization: `Bearer ${Cypress.env("token")}` },
      failOnStatusCode: false
    })
  })