describe('Automation Test Store - T-Shirt Purchase', () =>{
    it('should be able to purchase a t-shirt', () =>{
        //Step 1: Enter the URL
        cy.visit('https://automationteststore.com/');
});
it('should navigate to the T-shirt product and complete the purchase', () =>{
    //Step 2: Navigate T-shirt product
    cy.visit('https://automationteststore.com/index.php?rt=product/category&path=68/');
    cy.wait(7000)
    cy.contains('Apparel & Accessories').click();
    cy.contains('Apparel & Accessories').should('be.visible').click();
    //Step 3: Select Product
    cy.get('.thumbnail').eq(2).click();
    //Step 4: Modift Product
    //Adjust these selectors based on the actual dropdowns in the HTML
    cy.get('#option[title="Color"]').select('White');
    cy.get('#option[title="Size"]').select('M');
    cy.get('#option[title="Quantity"]').clear().type('1');
    cy.contains('Add to Cart').click();
    //Step 5: Proceed to checkout
    cy.contains('Checkout').click();
    //Step 6: Guest checkout
    cy.contains('Continue as Guest').click();
    //Fill in registration details
    cy.get('#firstname').type('Rahul');
    cy.get('#lastname').type('Shetty');
    cy.get('#email').type('rahul@gmail.com');
    cy.get('#telephone').type('1234545650');
    cy.get('#address1').type('123 Main st');
    cy.get('#city').type('GKP');
    cy.get('#postcode').type('273136');
    cy.get('#country').select("India");
    cy.get('#region').select('Central');
    cy.contains('Contniue').click();
    //Submit the registration
    //Step 7: Assert Success
    cy.contains('Your account has been created!').should('be.visible');
    cy.window().then((win) =>{
        //Step 8: Close Application
        //It's generally not necessary to close the window in cypress tests
        win.close();
    });
});

});