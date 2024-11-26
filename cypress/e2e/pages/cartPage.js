class cartPage {
    // Selectores
    checkoutButton = '.checkout_button';
  
    // Métodos de interacción
    checkout() {
      cy.get(this.checkoutButton).click();
    }
  }
  
  export default new cartPage();
  