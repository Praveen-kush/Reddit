it('Navigater to Hair Care section, adds the 3rd product to the cart, and proceeds to checkout', () => {
    cy.visit('https://automationteststore.com/');
    cy.contains('Hair Care').click();
    cy.get('.product .fixed_wrapper .fixed').eq(2).click();
    cy.contains('button','Add to Cart').click();
    cy.contains('a','Cart').click();
    cy.get('input[name="quantity"]').clear().type('3');
    cy.contains('button','Update').click();
    cy.contains('Proceed to Checkout').click();
});