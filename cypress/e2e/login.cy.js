describe('Login test', () => {
    it('Login positive', () => {
      cy.visit('http://localhost/index.html')

      cy.get('#login').click()
      cy.get('#username-modal').type('test1')
      cy.get('#password-modal').type('123')
      cy.get('button[class="btn btn-primary"]').click()
    })
  })