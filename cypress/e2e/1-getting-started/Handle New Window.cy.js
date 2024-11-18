describe('Handle new window', () => {
    it('Should handle the new window', () => {
      cy.visit('https://the-internet.herokuapp.com/windows');
       cy.get('.example a').invoke('removeAttr', 'target').click();
      cy.contains('h3', 'New Window').should('be.visible');
    });
  });
  