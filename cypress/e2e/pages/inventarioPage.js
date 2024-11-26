class inventoryPage {
    menuButton = '.bm-burger-button';
    logoutLink = '#logout_sidebar_link';
    addtoCard2 = '.inventory_item:nth-child(2) > .pricebar > [class="btn_primary btn_inventory"]';
    cart = '[fill="currentColor"]'
    inventoryItem = '.inventory_item'
    cartitem = '.shopping_cart_badge'
  
  
    assertUrlInventory() {
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    }
  
    openMenu() {
      cy.get(this.menuButton).click();
    }
  
    clickLogout() {
      cy.get(this.logoutLink).click();
    }
  
    clickaddtocartFirst() {
      cy.get(".inventory_item").last().first("button").click(); // Agrega el último producto al carrito
    };
  
    clickaddtocartLast() {
      cy.get(".inventory_item").last().find("button").click(); // Agrega el último producto al carrito
    };
  
    clickaddtocart2() {
      cy.get(this.addtoCard2).click();
      cy.get(this.cart).click();
    }
  
    cantidadArticulos(cantidadArticulos) {
      cy.get(this.cartitem).should("have.text", cantidadArticulos.toString()); // Verifica la cantidad en el carrito
    };
  
  logout() {
    this.openMenu();
    this.clickLogout();
  }
    }
  
  export default new inventoryPage();