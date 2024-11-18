it('Search for a product, sorts by price, and selects the first product',() => {
    cy.visit('https://automationteststore.com/')
    cy.wait(200);
    cy.get('input[name="search"]').should('be.visible').type('skincare{enter}');
    cy.url().should('include','search');
    cy.get('.productlist .fixed_wrapper .fixed').should('have.length.greaterThan', 0);
    cy.get('select[name="sort"]').should('be.visible').select('Price:Low to High');
    cy.get('.productlist .fixed_wrapper .fixed').should('be.visible').click();
    cy.get('productinfo').should('exist');
    
});
    