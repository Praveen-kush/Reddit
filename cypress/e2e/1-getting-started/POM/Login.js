// cypress/pages/LoginPage.js
class LoginPage {
    visit() {
      cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }
    
    enterUsername(username) {
      cy.get('#loginFrm_loginname').type(username);
    }
    
    enterPassword(password) {
      cy.get('#loginFrm_password').type(password);
    }
    
    submitLogin() {
      cy.get('button[title="Login"]').click();
    }
    
    login(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.submitLogin();
    }
  }
  
  export default new LoginPage();
  