describe('Apply implicit wait', () => {
    it('Should wait for 5 seconds', () => {
      cy.visit('https://the-internet.herokuapp.com/tables');
        cy.wait(5000);
        cy.get('#table1 tbody tr').eq(3).find('td').eq(2).then(($cell) => {
        const value = $cell.text();
        cy.log(`Fetched after wait: ${value}`);
      });
    });
  });
  