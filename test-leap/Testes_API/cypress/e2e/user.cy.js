describe('Testes user', () => {

    beforeEach(() => {
        cy.getToken()
    })

    const user = {
        "name": Cypress.env('name_user'),
        "password": Cypress.env('password_user'),
        "email": Cypress.env('email_user')
    }

    it('Deve criar e deletar usuario', () => {
        cy.createUser(user).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('id',Cypress.env('id_user'));
            expect(response.body).to.have.property('name',Cypress.env('name_user'));
            expect(response.body).to.have.property('email',Cypress.env('email_user'));
        })

        cy.deleteUser().then((response) => {
            expect(response.status).to.eq(200)
        })
    });

})
