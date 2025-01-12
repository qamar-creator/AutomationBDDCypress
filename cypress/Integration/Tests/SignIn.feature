Feature: User Sign In
    As a registered customer
    I want to sign in to my account
    So that I can access my account features

    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I enter valid email "ulzaman415@gmail.com"
        And I enter valid password "Abdullah@786"
        And I click the sign in button
        Then I should be successfully logged in
        And I should see my registered account dashboard

    Scenario: Failed login with invalid password
        Given I am on the login page
        When I enter valid email "ulzaman415@gmail.com"
        And I enter invalid password "Wrongpassword"
        And I click the sign in button
        Then I should see an invalid credentials error message

    Scenario: Failed login with unregistered email
        Given I am on the login page
        When I enter invalid email "nonexistent@example.com"
        And I enter valid password "Abdullah@786"
        And I click the sign in button
        Then I should see an invalid credentials error message

    Scenario: Empty form submission
        Given I am on the login page
        When I click the sign in button
        Then I should see required field validation messages
