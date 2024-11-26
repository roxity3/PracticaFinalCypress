import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from '../../pages/loginPage';
import inventoryPage from '../../pages/inventarioPage';

// Paso para realizar el login (esto se maneja en el Background)
Given("que estoy logueado en la aplicación con el usuario {string}", (usuario) => {
  // Este paso se maneja en el Background y no es necesario duplicarlo aquí.
});

// Paso para hacer clic en el botón de logout
When("hago clic en el botón de logout", () => {
  inventoryPage.logout();  // Usamos el método logout de inventoryPage
});

// Paso para verificar que la página de login se muestra después del logout
Then("debería ver la página de login", () => {
  loginPage.assertUrlLogin();  // Verifica que la URL es la de la página de login
});
