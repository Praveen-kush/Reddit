// cypress/integration/ecommerce_spec.js
describe('E-commerce Platform Tests', () => {
    before(() => {
        cy.login('testuser', 'password123'); // Replace with valid credentials
    });

    // Test to verify an item can be added to the cart after login
    it('should add an item to the cart', () => {
        cy.visit('https://example-ecommerce.com/products');
        cy.get('.product-item').first().click(); // Navigate to first product
        cy.get('.add-to-cart').click(); // Click on add to cart button
        cy.get('.cart-badge').should('contain', '1'); // Verify cart badge shows 1 item
    });
});
