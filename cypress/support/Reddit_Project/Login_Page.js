class LoginPage{
    LoginPage(){

    cy.visit('https://www.reddit.com/login');
    cy.get('#login-button').click();
    cy.xpath('//input[@id="login-username"]').type("praveenkushwaha0468@gmail.com");
    cy.xpath('//input[@id="login-password"]').type("Murari@123");
    cy.xpath('(//button[@id="login"])[2]').click();
    }
    //Enter the negative credentials-wrong email
    NTLoginCredentials1(){
        cy.visit('https://www.reddit.com/login');
        cy.get('#login-button').click();
        cy.xpath('//input[@id="login-username"]').type("praveenkushwaha0468.com");
        cy.xpath('//input[@id="login-password"]').type("Murari@123");
        cy.xpath('(//button[@id="login"])[2]').click();
        cy.xpath('(//button[@id="trailing-icons-validation"])[1]');
        // cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');

    }
    //Enter the negative credentials-wrong email
    NTLoginCredentials2(){
        cy.visit('https://www.reddit.com/login');
        cy.get('#login-button').click();
        cy.xpath('//input[@id="login-username"]').type("praveenkushwaha0468@gmail.com");
        cy.xpath('//input[@id="login-password"]').type("Murari@123");
        cy.xpath('(//button[@id="login"])[2]').click();
        cy.xpath('(//button[@id="trailing-icons-validation"])[1]');
    //     cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }
    //Enter the negative credentials-wrong password
    NTLoginCredentials3(){
        cy.visit('https://www.reddit.com/login');
        cy.get('#login-button').click();
        cy.xpath('//input[@id="login-username"]').type("praveenkushwaha0468@gmail.com");
        cy.xpath('//input[@id="login-password"]').type("Murari@3");
        cy.xpath('(//button[@id="login"])[2]').click();
        cy.xpath('(//button[@id="trailing-icons-validation"])[1]');
        // cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    }
    //password is empty 
    NTLoginCredentials4(){
        cy.visit('https://www.reddit.com/login');
        cy.get('#login-button').click();
        cy.xpath('//input[@id="login-username"]').type("praveenkushwaha0468@gmail.com");
        cy.xpath('//input[@id="login-password"]').type('{selectall}{backspace}');
        cy.xpath('(//button[@id="login"])[2]').click();
        cy.xpath('(//button[@id="trailing-icons-validation"])[1]');
        // cy.xpath('//div[@class="alert alert-danger alert-dismissible"]').should('be.visible').should('have.text','Warning: No match for E-Mail Address and/or Password.');
    
    }

}
export default LoginPage
