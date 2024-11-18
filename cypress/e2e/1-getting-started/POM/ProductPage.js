// cypress/pages/ProductPage.js
class ProductPage {
    visit() {
      cy.visit('https://automationteststore.com/');
    }
    
    addProductToCart(productName) {
      cy.contains(productName).click();
      cy.get('button[title="Add to Cart"]').click();
    }
  }
  
  export default new ProductPage();
  