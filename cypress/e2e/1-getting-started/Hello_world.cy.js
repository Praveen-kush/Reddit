describe('Wait until "Hello World!" is displayed', () => {
    it('Should wait for the element to load', () => {
      cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
      cy.get('#start button').click();
      cy.get('#finish', { timeout: 10000 }).should('contain', 'Hello World!');
    });
  });
  