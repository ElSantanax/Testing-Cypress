/// <reference types="cypress" />

describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {

    cy.visit('http://127.0.0.1:5500/index.html');

    // Ver si el TITULO se muestra
    cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');
    cy.get('[data-cy="titulo-proyecto"]').should('exist');

    // Ver si las CITAS se muestran
    cy.get('[data-cy="heading-titulo"]')
      .invoke('text')
      .should('equals', 'No hay Citas, comienza creando una')
  })
})