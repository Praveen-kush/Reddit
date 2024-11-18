// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://example-ecommerce.com/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});