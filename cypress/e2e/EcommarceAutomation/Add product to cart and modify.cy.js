it('Adds product to cart, modifies quantity, and verifies cart is empty', () => {
    cy.visit('https://automationteststore.com/');
    cy.contains('input[type="text"][name="search"]').type('skincare{enter}');
    cy.url().then(url =>{

    
        if(url.includes('search')){
            cy.get('productlist .fixed_wrapper .fixed').then($elements =>{
                if($elements.length > 0){
                    cy.get('productlist .fixed_wrapper .fixed').then($elements => {
                        if($elements.length > 0){
                            cy.contains('.productlist .fixed_wrapper .fixed').first().click();
                            cy.contains('button', 'Add to Cart').click();
                            cy.get('a', 'Cart').click();
                            cy.get('input[name="quantity"]').clear().type('2');
                            cy.contains('button', 'Update').click();
                            cy.get('cart .quantity').then($quantity =>{
                                cy.contains('button', 'Remove').click();
                                cy.contains('Your cart is empty');
                        
                            })
                    }
                    })
                }
            })
    }
    })

})