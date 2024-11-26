Feature: Checkout en Sauce Demo

    Background: Login
        Given que abro la página de Sauce Demo
        When ingreso el usuario "standard_user" y la contraseña "secret_sauce"
        Then debería ver la página de productos

    Scenario: Completar el proceso de checkout exitosamente
        When agrego un producto al carrito
        And ingreso al carrito
        And hago clic en "Checkout"
        And ingreso mi información en la página de información
        And reviso los detalles en la página de resumen
        And finalizo la compra
        Then debería ver la página final de confirmación
