import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open the simple form page', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-from')
})

When('I enter my name and email', () => {
  cy.get('#name').type('Test User')
  cy.get('#email').type('testuser@example.com')
})

When('I submit the form', () => {
  cy.get('.ui.button').click()
})

Then('I should see a success message', () => {
  cy.get('#confirmation').should('contain', 'Thank you')
})
