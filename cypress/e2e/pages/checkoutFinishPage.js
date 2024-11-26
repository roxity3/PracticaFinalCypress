class checkoutFinishPage {
    // Selectores
    orderConfirmationMessage = '.complete-header';
  
    // Métodos de validación
    assertOrderCompleted() {
      cy.get(this.orderConfirmationMessage).should('contain', 'THANK YOU FOR YOUR ORDER');
    }
  }
  
  export default new checkoutFinishPage();
  