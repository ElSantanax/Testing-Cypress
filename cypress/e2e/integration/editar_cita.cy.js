/// <reference types="cypress" />

describe('Llena los campos del formulario', () => {
    it('Llena el formualrio', () => {

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

    it('Edita la cita', () => {
        cy.get('[data-cy="btn-editar"]')
            .click();

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Copito')

        cy.get('[data-cy="submit-cita"]')
            .click();
    });
})  