describe('Fetch values from tables', () => {
    it('Should fetch the required values from the tables', () => {
      cy.visit('https://the-internet.herokuapp.com/tables');
      cy.get('#table1 tbody tr').eq(3).find('td').eq(2).then(($cell) => {
        const value1 = $cell.text();
        cy.log(`4th row, 3rd column value from 1st table: ${value1}`);
      });
      cy.get('#table2 tbody tr').eq(1).find('td').last().then(($cell) => {
        const value2 = $cell.text();
        cy.log(`2nd row, last column value from 2nd table: ${value2}`);
      });
    });
  });
  