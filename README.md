# Project Structure

This project is set up for Cypress testing. Below is the folder structure and a brief description of each directory:

## cypress/
The main directory for all Cypress-related files.

### Integration/
Contains integration tests for the application.

#### Tests/
- **SignIn.feature**: Feature file for sign-in tests.
- **SignUp.feature**: Feature file for sign-up tests.
- **SignIn.js**: JavaScript file for sign-in tests.
- **SignUp.js**: JavaScript file for sign-up tests.

#### pages/
- **SigninPage.js**: Page object for the sign-in page.
- **SignupPage.js**: Page object for the sign-up page.

### fixtures/
Contains test data files used in the tests.
- **example.json**: Example fixture data. // currently have not used data driven

### support/
Contains support files for Cypress.
- **commands.js**: Custom commands for Cypress.
- **e2e.js**: End-to-end testing support.

### Plugins/
Contains custom plugins for Cypress.
- **Index.js**: Main plugin file.

## Feature File Structure

Feature files are written in Gherkin syntax, which is a domain-specific language used to describe software behavior without detailing how that functionality is implemented. Each feature file typically contains one or more scenarios that outline specific use cases.

### Structure of Feature Files
- **File Naming**: Feature files should be named descriptively, usually ending with `.feature`. For example:
  - `SignIn.feature`: Contains scenarios related to the sign-in functionality.
  - `SignUp.feature`: Contains scenarios related to the sign-up functionality.

### Example Scenario
A typical scenario in a feature file might look like this:

```gherkin
Feature: User Sign In

  Scenario: Successful sign in
    Given the user is on the sign-in page
    When the user enters valid credentials
    Then the user should be redirected to the dashboard
```

This structure allows for clear and understandable documentation of the application's behavior, making it easier for both technical and non-technical stakeholders to understand the requirements.

## Running Tests

To run the tests on your machine, follow these steps:

1. **Prerequisites**:
   - Ensure you have [Node.js](https://nodejs.org/) and npm (Node Package Manager) installed on your machine.

2. **Clone the repository**:
   ```bash
   git clone https://github.com/qamar-creator/AutomationBDDCypress.git
   cd <repository-directory>
   ```

3. **Install dependencies**:
   Run the following command to install the necessary packages:
   ```bash
   npm install
   ```

4. **Run the tests**:
   You can run the tests using the following command:
   ```bash
   npx cypress open
   ```
   This will open the Cypress Test Runner, where you can select and run the tests.

   Alternatively, to run the tests in headless mode, use:
   ```bash
   npx cypress run
   ```

- **cypress.config.js**: Configuration file for Cypress.
- **package.json**: Contains project metadata and dependencies.
- **package-lock.json**: Locks the versions of dependencies.

This README provides an overview of the project structure for better understanding & navigation.
