class HeaderFragment{
    openLoginModal() {
        return cy.get('#login').click();
    }
}

export default HeaderFragment;