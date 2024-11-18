describe('Flipkart Search Input Placeholder', () => {
    it('should validate the placeholder text in the search input field', () => {
      cy.visit('https://www.flipkart.com');
      cy.get('body').then(($body) => {
        if ($body.find('button._2KpZ6l._2doB4z').length) {
          cy.get('button._2KpZ6l._2doB4z').click();
        }
      });
      cy.contains('input[title="Search for products, brands and more"]').then(($input) => {
        expect($input).to.have.attr('placeholder', 'Search for products, brands and more');
      });
    });
  });
  