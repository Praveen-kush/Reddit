
describe('Login Page Tests', () => {
    // This hook will visit the login page before each test
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    // This hook will clear cookies after each test
    afterEach(() => {
        cy.clearCookies();
    });

    // Test to check if the login button is visible
    it('should display the login button', () => {
        cy.get('button[type="submit"]').should('be.visible');
    });

    // Test to check if a field with the placeholder "Enter your email" exists
    it('should have a field with the placeholder "Enter your email"', () => {
        cy.get('input[placeholder="Enter your email"]').should('exist');
    });
});
