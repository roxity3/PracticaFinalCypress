describe('Flujo completo de compra en Sauce Demo', () => {
  it('Debería completar el flujo de compra y hacer logout', () => {
    // 1. Login en la aplicación
    cy.visit('https://www.saucedemo.com');  // Abre la página de login
    cy.get('#user-name').type('standard_user');  // Ingresa el nombre de usuario
    cy.get('#password').type('secret_sauce');  // Ingresa la contraseña
    cy.get('.btn_action').click();  // Hace clic en el botón de login

    // Verifica que la página de inventario se haya cargado
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');
    
    // 2. Agregar un producto al carrito
    cy.get('.inventory_item:nth-child(2) .btn_primary').click();  // Agrega un producto al carrito

    // 3. Ingresar al carrito y seleccionar "Checkout"
    cy.get('.shopping_cart_link').click();  // Ingresa al carrito
    cy.get('.checkout_button').click();  // Hace clic en "Checkout"

    // 4. Ingresar información para el checkout y continuar
    cy.get('#first-name').type('John');  // Ingresa el primer nombre
    cy.get('#last-name').type('Doe');  // Ingresa el apellido
    cy.get('#postal-code').type('12345');  // Ingresa la dirección
    cy.get('.cart_button').click();  // Hace clic en "Continue"

    // 5. Validar la página de resumen del checkout ("Overview")
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-two.html');  // Verifica que estamos en la página de resumen
    cy.get('.cart_quantity').should('exist');  // Verifica que los productos están en el resumen

    // 6. Finalizar la compra
    cy.get('.cart_button').contains('Finish').click();  // Finaliza la compra

    // 7. Validar la página final del checkout
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html');  // Verifica que estamos en la página de finalización
    cy.contains('Thank you for your order').should('be.visible');  // Verifica que se muestra el mensaje de confirmación

    // 8. Realizar logout
    cy.get('.bm-burger-button').click();  // Abre el menú
    cy.get('#logout_sidebar_link').click();  // Realiza el logout

    // Verifica que la página de login se cargue
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});