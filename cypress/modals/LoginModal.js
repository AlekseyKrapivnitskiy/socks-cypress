class LoginModal {
    fillLoginInput(login) {
        cy.get('#username-modal').type(login)
    }

    fillPasswordInput(password) {
        cy.get('#password-modal').type(password)
    }

    clickOnLogInButton() {
        cy.get('button[class="btn btn-primary"]').click()
    }
}

export default LoginModal;