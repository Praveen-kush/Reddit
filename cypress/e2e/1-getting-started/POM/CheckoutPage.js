// cypress/pages/CheckoutPage.js
class CheckoutPage {
    completeCheckout() {
      cy.get('#checkout_btn').click();
    }
  }
  
  export default new CheckoutPage();
  