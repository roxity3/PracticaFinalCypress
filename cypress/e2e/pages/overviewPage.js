class overviewPage {
    // Selectores
    finishButton = '.btn_action';
  
    // Métodos de interacción
    reviewOrder() {
      cy.get('h2').should('contain', 'Checkout: Overview');
    }
  
    finishPurchase() {
      cy.get(this.finishButton).click();
    }
  }
  
  export default new overviewPage();
  