// cypress/pages/CartPage.js
class CartPage {
    visit() {
      cy.visit('https://automationteststore.com/index.php?rt=checkout/cart');
    }
    
    verifyProductInCart(productName) {
      cy.contains('td', productName).should('be.visible');
    }
    
    proceedToCheckout() {
      cy.get('a[title="Checkout"]').click();
    }
  }
  
  export default new CartPage();
  