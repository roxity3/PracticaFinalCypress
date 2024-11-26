Feature: Login en Sauce Demo

    Scenario: Login exitoso con usuario estandar
        Given que abro la página de Sauce Demo
        When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
        Then debería ver la página de productos