# Testing con Cypress

Este proyecto es una aplicación de administración de citas veterinarias que sirve como ejemplo práctico para aprender testing con Cypress, un moderno framework de pruebas end-to-end.

## 📋 Descripción del Proyecto

El proyecto consiste en una aplicación web para gestionar citas veterinarias, implementada con HTML, CSS (Bootstrap) y JavaScript vanilla. Se utiliza Cypress para realizar pruebas automatizadas que garantizan el correcto funcionamiento de la aplicación.

## 🛠️ Estructura del Proyecto

```
├── cypress/
│   ├── e2e/
│   │   └── integration/
│   │       ├── crear_citas.cy.js
│   │       ├── editar_cita.cy.js
│   │       ├── eliminar.cy.js
│   │       ├── primer_test.cy.js
│   │       └── validar_formulario.cy.js
│   ├── fixtures/
│   └── support/
├── css/
├── js/
│   └── classes/
└── index.html
```

## 🎯 Conceptos Aprendidos

1. **Configuración de Cypress**
   - Instalación y configuración inicial de Cypress
   - Estructura de archivos de prueba
   - Uso de comandos personalizados

2. **Selección de Elementos**
   - Uso de selectores data-cy para pruebas más robustas
   - Selección de elementos del DOM
   - Verificación de existencia de elementos

3. **Aserciones**
   - Validación de texto y contenido
   - Comprobación de clases CSS
   - Verificación de estados de elementos

4. **Pruebas de Funcionalidad**
   - Testing de formularios
   - Validación de mensajes de error
   - Pruebas de creación, edición y eliminación de citas

5. **Buenas Prácticas**
   - Uso de atributos data-cy para testing
   - Organización de pruebas en describe e it
   - Estructura clara y mantenible de los tests

## 🚀 Casos de Prueba Implementados

1. **Carga Inicial**
   - Verificación de carga de página principal
   - Validación de títulos y elementos iniciales

2. **Validación de Formularios**
   - Pruebas de campos obligatorios
   - Validación de mensajes de error
   - Verificación de alertas

3. **Gestión de Citas**
   - Creación de nuevas citas
   - Edición de citas existentes
   - Eliminación de citas

## 💻 Tecnologías Utilizadas

- HTML5
- CSS3 (Bootstrap)
- JavaScript
- Cypress 15.0.0

## 🔍 Comandos Útiles

```bash
# Abrir Cypress Test Runner
npx cypress open

# Ejecutar pruebas en modo headless
npx cypress run
```

## 👨‍💻 Autor

José Santana

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.
