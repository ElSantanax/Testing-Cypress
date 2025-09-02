/// <reference types="cypress" />

describe('Validar el formulario', () => {
    it('Validacion de campos del formulario', () => {

        cy.visit('http://127.0.0.1:5500/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Hook')

        cy.get('[data-cy="propietario-input"]')
            .type('José Santana')

        cy.get('[data-cy="telefono-input"]')
            .type('89103148')

        cy.get('[data-cy="fecha-input"]')
            .type('2025-02-05')

        cy.get('[data-cy="hora-input"]')
            .type('10:00')

        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo quiere dormir, no quiere comer.')

        cy.get('[data-cy="submit-cita"]')
            .click();
    })
})  