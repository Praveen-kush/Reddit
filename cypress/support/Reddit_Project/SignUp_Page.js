class SignUpPage{
    SignUpPage(){
        cy.visit('https://www.reddit.com');
        cy.xpath('(//button[@id="login"])[1][3]').click();
        cy.xpath('//input[@id="register-email"]').type("praveenkushwaha0468@gmail.com");
        cy.xpath('(//button[@id="register"])[1][2]').click();
        cy.xpath('//input[@id="register-username"]').type("No_Hurry_1750");
        cy.xpath('//input[@id="register-password"]').type("Murari@123");
        cy.xpath('(//button[@id="register"])[2][2]').click();
    }
}
export default SignUpPage

