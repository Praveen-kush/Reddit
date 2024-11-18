// Custom command to handle iframe
Cypress.Commands.add('getIframe', (iframeSelector) => {
    return cy
        .get(iframeSelector)
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap);
});

// Test case
describe('Handle Iframe and Click "Join Now"', () => {
    it('Clicks on "Join now" inside iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // Access the iframe using the custom command
        cy.getIframe('#courses-iframe')
          .find('a[href*="sign_up"]');
          // CSS selector for 'Join now' link
          
    });
});
