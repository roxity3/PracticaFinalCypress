import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventoryPage from '../../pages/inventarioPage';
import yourInformationPage from '../../pages/yourInformationPage';
import overviewPage from '../../pages/overviewPage';
import checkoutFinishPage from '../../pages/checkoutFinishPage';

// Paso para agregar un producto al carrito
When("agrego un producto al carrito", () => {
  inventoryPage.clickaddtocart2();  // Usamos el método para agregar el producto al carrito
});

// Paso para ir al carrito y continuar con el checkout
When("hago clic en el carrito y selecciono Checkout", () => {
  inventoryPage.cartItemClick();  // Supongamos que tienes un método como este para abrir el carrito y hacer el checkout
});

// Paso para completar la información del checkout
When("ingreso mi información de checkout con nombre {string}, dirección {string}, y código postal {string}", (nombre, direccion, codigoPostal) => {
  yourInformationPage.fillInformation(nombre, direccion, codigoPostal);  // Usamos el método que llena la información
  yourInformationPage.continuar();  // Método para continuar
});

// Paso para validar la página de resumen del checkout
Then("debería ver la página de resumen del checkout", () => {
  overviewPage.assertOverviewPage();  // Verificamos que estamos en la página de Overview
});

// Paso para finalizar la compra
When("finalizo la compra", () => {
  overviewPage.clickFinish();  // Hacemos clic en el botón Finish en la página Overview
});

// Paso para verificar la página final del checkout
Then("debería ver la página de finalización de compra", () => {
  checkoutFinishPage.assertFinishPage();  // Verificamos que llegamos a la página de finalización
});