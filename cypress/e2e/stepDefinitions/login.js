import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventarioPage from '../../pages/inventarioPage';
import loginPage from '../../pages/loginPage';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import inventarioPage from '../../pages/inventarioPage';
import loginPage from '../../pages/loginPage';

// Paso para abrir la página de Sauce Demo
Given("que abro la página de Sauce Demo", () => {
  loginPage.visit();
});

// Paso para ingresar credenciales desde fixtures
When("ingreso las credenciales del usuario {string}", (userKey) => {
  cy.fixture("usuarios").then((usuarios) => {
    const user = usuarios[userKey];
    loginPage.login(user.username, user.password);
  });
});

// Paso para verificar que la página de productos se carga
Then("debería ver la página de productos", () => {
  inventarioPage.assertUrlInventory();
});


