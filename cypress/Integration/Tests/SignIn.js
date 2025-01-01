import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SigninPage from '../pages/SigninPage.js';

const signinPage = new SigninPage();

Given('I am on the login page', () => {
    signinPage.visit();
});

When('I enter valid email {string}', (email) => {
    signinPage.elements.emailInput().type(email);
});


When('I enter valid password {string}', (password) => {
    signinPage.elements.passwordInput().type(password);
});


When('I enter invalid email {string}', (email) => {
    signinPage.elements.emailInput().type(email);
});

When('I enter invalid password {string}', (password) => {
    signinPage.elements.passwordInput().type(password);
});

When('I click the sign in button', () => {
    signinPage.submitForm();
});

Then('I should be successfully logged in', () => {
    signinPage.verifySuccessfulLogin();
});

Then('I should see my account dashboard', () => {
   
    cy.get('.base').should('include.text', 'My Account');
});

Then('I should see an invalid credentials error message', () => {
    signinPage.verifyErrorMessage();
    cy.get('[data-ui-id="message-error"]')
        .should('contain', 'The account sign-in was incorrect');
});

Then('I should see required field validation messages', () => {
    cy.get('#email-error')
        .should('be.visible')
        .and('contain', 'This is a required field');
    cy.get('#pass-error')
        .should('be.visible')
        .and('contain', 'This is a required field');
});