describe('OrangeHRM Login Functionality', () => {
    it('should successfully login with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input#txtUsername').type('Admin');
        cy.get('input#txtPassword').type('admin123');
        cy.get('input#btnLogin').click();
        cy.url().should('include', '/dashboard');
        cy.get('h1').should('contain.text', 'Dashboard');
    });
    it('should show an error message for invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input#txtUsername').type('Admin');
        cy.get('input#txtPassword').type('wrongpassword');
        cy.get('input#btnLogin').click();
        cy.get('#spanMessage').should('contain.text', 'Invalid credentials');
    });
});
