describe('Handle JavaScript Alerts', () => {
    it('Should handle all types of alerts', () => {
      cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
      cy.contains('button', 'Click for JS Alert').click();
      cy.on('window:alert', (text) => {
        expect(text).to.contains('I am a JS Alert');
      });
      cy.contains('button', 'Click for JS Confirm').click();
      cy.on('window:confirm', (text) => {
        expect(text).to.contains('I am a JS Confirm');
        return true;
      });
      cy.get('#result').should('have.text', 'You clicked: Ok');
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('Cypress Test');
        cy.contains('button', 'Click for JS Prompt').click();
      });
      cy.get('#result').should('have.text', 'You entered: Cypress Test');
    });
  });
  