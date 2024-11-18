describe('Automaton Test Store - Registration/Login Flow', () => {
    const baseUrl = 'https://automationteststore.com/';
    const email = 'your_test_email@example.com';
    const password = 'YourPassword123';
    beforeEach(() => {
        cy.visit(baseUrl);
    });
    it('Checks registration status and logs in or registers as needed',() =>{
        cy.wait(4000);
        cy.get('a[herf*="account/login"]').should('be.visible').click();
        cy.get('input[name="loginname"]').should('be.visible').type(email);
        cy.get('input[name="password"]').should('be.visible').type(password);
        cy.get('button[type=submit"]').should('be.visible').click();
        cy.get('body').then(($body) => {
            if($body.text().includes('Error: Incorrect login or password')){
                cy.get('a[herf*="account/register"]').should('be.visible').click();
                cy.get('input[name="firstname"]').should('be.visible').type('FirstName');
                cy.get('input[name="lastname"]').should('be.visible').type('LastName');
                cy.get('input[name="email"]').should('be.visible').type(email);
                cy.get('input[name="address_1"]').should('be.visible').type('516 gkp sbz');
                cy.get('input[name="city"]').should('be.visible').type('12345');
                cy.get('input[name="postcode"]').should('be.visible').type('273163');
                cy.get('input[name="loginname"]').should('be.visible').type(email);
                cy.get('input[name="password"]').should('be.visible').type(password);
                cy.get('input[name="confirm"]').should('be.visible').type(password);
                cy.get('button[type="submit"]').should('be.visible').click();
            }
        });
        cy.contains('Welcome back,').should('exist');

    });
    
});