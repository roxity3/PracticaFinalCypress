class loginPage {
    // Selectores
    usernameField = '#user-name';
    passwordField = '#password';
    loginButton = '.btn_action';

    // Métodos de interacción
    assertUrlLogin() {
      cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
    }

    visit() {
      cy.visit('https://www.saucedemo.com/v1/index.html');
    }

    enterUsername(username) {
      cy.get(this.usernameField).type(username);
    }

    enterPassword(password) {
      cy.get(this.passwordField).type(password);
    }

    clickLogin() {
      cy.get(this.loginButton).click();
    }
 
    // Método para realizar el flujo completo de inicio de sesión
    login(username, password) {
      this.enterUsername(username);
      this.enterPassword(password);
      this.clickLogin();
    }
  }
  
  
  export default new loginPage();