class LogOutPage{
    LogOutPage(){
        cy.visit('https://www.reddit.com');
        cy.xpath('//button[@id="expand-user-drawer-button"]').click();
        cy.xpath('//button[@id="logout-list-item"]').click();
    }
}
export default LogOutPage
