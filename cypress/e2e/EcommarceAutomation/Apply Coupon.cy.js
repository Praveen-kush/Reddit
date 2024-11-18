it('Applies coupon at checkout and verifies the discount', () => {
    cy.visit("https://automationteststore.com/");
    cy.contains('Proceed to Checkout').click();
    cy.get('input[placeholder="Enter coupon code"]').type('HAIR20');
    cy.contains('button', 'Apply').click();
    cy.contains('Discount').then($discount) =>{
        const discount = $discount.text();
        expect($discount).to.exist;
    });
    cy.get('.total .price').then($total) =>{
        const originalTotal = parseFloat($total.text().replace('$', ''));
        cy.get('.discount .price').then($discountPrice) => {
            const discountAmount = originalTotal * 0.20;
            const expectedTotal = originalTotal - discountAmount;
            expect(parseFloat($discountPrice.text().replace('$', ''))).to.be.closeTo(expectedTotal);
        });
    });
    
    
});
