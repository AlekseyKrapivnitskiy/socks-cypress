class LoginModal {
    fillLoginInput(login) {
        cy.get('#username-modal').type(login)
    }

    fillPasswordInput(password) {
        cy.get('#password-modal').type(password)
    }

    clickOnLogInButton() {
        cy.get('button[onclick*=login]').click();
    }
}

export default LoginModal;