class SignupPage{
//selectors
elements={

    
register_email :() =>cy.get('#email_address'),
register_pass: ()=> cy.get('#password'),
confirm_pass: ()=> cy.get('#password-confirmation'),
Create_An_Account: ()=> cy.get('#form-validate > .actions-toolbar > div.primary > .action > span'),
firstname: () =>cy.get('#firstname'),
lastname: () =>cy.get('#lastname')
    
}





Signup()
{

    this.elements.Create_An_Account().click();
}

}
export default SignupPage;