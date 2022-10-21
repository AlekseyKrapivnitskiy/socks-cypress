import HeaderFragment from '../fragments/HeaderFragment.js'
import LoginModal from '../modals/LoginModal.js';

class HomePage {

    constructor() {
        this.header = new HeaderFragment();
        this.loginModal = new LoginModal();
    }

    open() {
        cy.visit('http://localhost/index.html')
    }

    logIn(login, password) {
        this.header.openLoginModal();

        this.loginModal.fillLoginInput(login);
        this.loginModal.fillPasswordInput(password);
        this.loginModal.clickOnLogInButton;
    }
}

export default HomePage;