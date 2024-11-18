describe('Test Case 1: Verify Title Page', () => {
    it('Should verify the page title is "My Store"',()=>{
        cy.visit('https://books.toscrape.com/');
        cy.wait(4000);
        cy.title().should('eq','My Store');
    });
    
});