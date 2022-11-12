/// <reference types="cypress" />

describe('Page Not Found', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/page123')
  })

  it('should display Page 404 Not Found Message', () => {
    cy.get('#root').should('have.text', 'Page 404 Not Found!')
  })
})
