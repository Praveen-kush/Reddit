it('Fills in shipping address details and selects standard shipping',()=> {
    cy.visit('https://automationteststote.com/');
    cy.contains('Proceed to Checkout').click();
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#address_1').type('516 GKP Siswa');
    cy.get('#city').type('GKP');
    cy.get.('select[name="#country"]').select('india');
    cy.get.('select[name="#region"]').select('central');
    cy.contains('Standard Shipping').click();
    cy.get('#shipping-option-standard').should('be.checked');
});