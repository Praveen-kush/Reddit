describe('Flipkart Electronics Category Link', () => {
    it('should validate that the category link contains "Electronics"', () => {
      cy.visit('https://www.flipkart.com');
      cy.get('body').then(($body) => {
        if ($body.find('button._2KpZ6l._2doB4z').length) {
          cy.get('button._2KpZ6l._2doB4z').click();
        }
      });
      cy.get('a[href*="electronics"]').then(($link) => {
        expect($link.text().toLowerCase()).to.include('electronics');
      });
    });
  });
  