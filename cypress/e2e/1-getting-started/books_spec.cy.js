describe('Test Case 1: Verify Page Title', () => {
    it('Should verify the page title is "My Store"', () => {
      cy.visit('https://books.toscrape.com/');
      cy.title().should('eq', 'My Store');
    });
  });

  describe('Test Case 2: Verify Non-fiction Link', () => {
    it('Should navigate to Non-Fiction category and verify the results page', () => {
      cy.visit('https://books.toscrape.com/');
      cy.contains('Non-Fiction').click(); // Assuming there's a 'Non-Fiction' category
      cy.url().should('include', 'non-fiction');
      cy.get('h1').should('contain', 'Non-Fiction');
    });
  });

  describe('Test Case 3: Add a Book to the Basket', () => {
    it('Should add a book to the basket', () => {
      cy.visit('https://books.toscrape.com/');
      cy.get('.product_pod').first().click();  // Click on the first product (book)
      cy.contains('Add to basket').click();    // Add the book to the basket
      cy.get('.basket-mini').should('contain', '1 item'); // Verify 1 item in the basket
    });
  });
  