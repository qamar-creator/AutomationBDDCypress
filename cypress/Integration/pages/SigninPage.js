class SigninPage {
    // Selectors
    elements = {
        signinLink: () => cy.contains('Sign In'),
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#pass'),
        signInButton: () => cy.get('#send2'),
        seemyorders: () => cy.get('.items > :nth-child(2) > a'),
        errorMessage: () =>cy.get('.message-error > div'),
        createaccount: ()=>cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span'),
    }

    // Actions 
    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }

   clickcreateAccount()
   {
    this.elements.createaccount().click({ multiple: true });
   }
    
    submitForm() {
        this.elements.signInButton().click();
    }

    verifySuccessfulLogin() {
        this.elements.seemyorders().should('be.visible');
    }

    verifyErrorMessage() {
        this.elements.errorMessage().should('be.visible');
    }
}

export default SigninPage;
