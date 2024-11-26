class yourInformationPage {
    // Selectores
    firstNameField = '#first-name';
    lastNameField = '#last-name';
    postalCodeField = '#postal-code';
    continueButton = '.cart_button';
  
    // Métodos de interacción
    enterInfo() {
      cy.get(this.firstNameField).type('John');
      cy.get(this.lastNameField).type('Doe');
      cy.get(this.postalCodeField).type('12345');
      cy.get(this.continueButton).click();
    }
  }
  
  export default new yourInformationPage();
  