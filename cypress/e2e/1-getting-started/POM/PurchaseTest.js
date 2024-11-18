// cypress/integration/PurchaseTest.js
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('E-commerce Checkout Flow', () => {
  it('should complete the checkout workflow successfully', () => {
    // Login
    LoginPage.visit();
    LoginPage.login('testUser', 'testPass');
    
    // Add product to cart
    ProductPage.visit();
    ProductPage.addProductToCart('Some Product');
    
    // Verify product in cart
    CartPage.visit();
    CartPage.verifyProductInCart('Some Product');
    CartPage.proceedToCheckout();
    
    // Complete checkout
    CheckoutPage.completeCheckout();
    
    // Assertions to confirm completion
    cy.url().should('include', '/checkout/success');
    cy.contains('Your Order Has Been Processed!').should('be.visible');
  });
});
