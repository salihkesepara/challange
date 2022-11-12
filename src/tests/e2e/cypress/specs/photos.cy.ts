/// <reference types="cypress" />

describe('Photos Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/photos/1')
  })

  it('should url include photos/1', () => {
    cy.url().should('include', '/photos/1')
  })

  it('should have title', () => {
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('have.text', 'React Frontend Project')
  })

  it('should fetch the photos', () => {
    cy.get('[data-testid="imageList"] li').should('have.length.greaterThan', 1)
  })

  it('should show modal when photo clicked', () => {
    cy.get('[data-testid="imageList"] > :nth-child(4)')
      .click()
    cy.get('[data-testid="box"]').should('have.length', '1')
  })
})
