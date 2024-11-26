Feature: Cerrar sesión en Sauce Demo

    Background: Login
        Given que abro la página de Sauce Demo
        When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
        Then debería ver la página de productos

    Scenario: Cerrar sesión correctamente
        When hago clic en el botón de logout
        Then debería ver la página de login
