import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SigninPage from '../pages/SigninPage.js';
import SignupPage from '../pages/SignupPage.js';

const signinPage = new SigninPage();
const signupPage= new SignupPage();

Given('I am on the signup page', () => {
    signinPage.visit();
    signinPage.clickcreateAccount();
    cy.get('.base').should('contain.text', 'Create New Customer Account');
    
});
  When ('I enter personal information firstname {string} and lastname {string}',(firstname,lastname) => {
    signupPage.elements.firstname().type(firstname),
    signupPage.elements.lastname().type(lastname);

  });
When('I enter valid registeration email {string}', (email) => {
    
signupPage.elements.register_email().type(email);
});

When('I enter valid registeration password {string}', (password) => {
    signupPage.elements.register_pass().type(password);
});

When ('I confirm the registration password {string}',(conf_password)=>{
    signupPage.elements.confirm_pass().type(conf_password);
});
When('I click the sign up button', () => {
    signupPage.Signup();
});

Then('I should be successfully signed up', () => {
    signinPage.verifySuccessfulLogin(); // Assuming a method to verify successful signup
});

Then('I should see my registered account dashboard', () => {
    cy.get('.base').should('include.text', 'My Account');
});

When( 'I enter email {string}',(email)=>{
    signupPage.elements.register_email().type(email);
})
Then('I should see an email already registered error message', () => {
    signinPage.verifyErrorMessage();
    cy.get('[data-ui-id="message-error"]')
        .should('contain', 'There is already an account');
});

When ('I enter invalid registration email {string}',(email)=>
{
    signupPage.elements.register_email().type(email);
});

Then('I should see an invalid email format error message', () => {
    
    cy.get('#email_address-error')
        .should('contain', 'Please enter a valid email address');
});

Then('I should see required fields validation messages', () => {
    cy.get('#email_address-error')
        .should('be.visible')
        .and('contain', 'This is a required field');
    cy.get('#password-error')
        .should('be.visible')
        .and('contain', 'This is a required field');
        cy.get('#firstname-error').should('be.visible')
        .and('contain', 'This is a required field');

        cy.get('#lastname-error').should('be.visible')
        .and('contain', 'This is a required field');

        cy.get('#lastname-error').should('be.visible')
        .and('contain', 'This is a required field');


        cy.get('#password-confirmation-error').should('be.visible')
        .and('contain', 'This is a required field');

});
