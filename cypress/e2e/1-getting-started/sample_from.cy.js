describe('Sample_From', () => {
    it('Login', () => {
        cy.visit('https://v1.training-support.net/selenium/simple-form')
        cy.get('#firstname').type('Praveen')
        cy.get('#lastname').type('Kumar')
        cy.get('#email').type('praveenkushwaha0468@gmail.com')
        cy.get('#number').type(7309647468)
        cy.get('#textarea').type('My account')
    });
    
});