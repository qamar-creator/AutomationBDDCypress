Feature: User Sign Up
    As a new customer
    I want to sign up for an account
    So that I can access my account features

    Scenario: Successful signup with valid details
        Given I am on the signup page
        When I enter personal information firstname "Qamar" and lastname "ul"
        And I enter valid registeration email "q31.zaman@gmail.com"
        And I enter valid registeration password "NewPassword@123"
        And I confirm the registration password "NewPassword@123"
        And I click the sign up button
        Then I should be successfully signed up
        And I should see my registered account dashboard

    Scenario: Failed signup with already registered email
        Given I am on the signup page
        When I enter personal information firstname "Qamar" and lastname "ul"
        When I enter email "ulzaman415@gmail.com"
        And I enter valid registeration password "NewPassword@123"
        And I confirm the registration password "NewPassword@123"
        And I click the sign up button
        Then I should see an email already registered error message

    Scenario: Failed signup with invalid email format
        Given I am on the signup page
        When I enter personal information firstname "Qamar" and lastname "ul"
        When I enter invalid registration email "invalid-email"
       And I enter valid registeration password "NewPassword@123"
        And I confirm the registration password "NewPassword@123"
        And I click the sign up button
        Then I should see an invalid email format error message

    Scenario: Failed signup with missing required fields
        Given I am on the signup page
        When I click the sign up button
        Then I should see required fields validation messages
