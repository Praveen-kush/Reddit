describe('Reddit', () => {
    it('Login',()=>{
        cy.visit('https://www.reddit.com/login')
        cy.get('#login-username').type('username')
        cy.get('#login-password').type('password')
        cy.get('.submit-button').click()

    });
    
});