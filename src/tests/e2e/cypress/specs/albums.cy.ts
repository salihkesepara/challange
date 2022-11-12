/// <reference types="cypress" />

describe('Albums Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/albums/1')
  })

  it('should url include albums/1', () => {
    cy.url().should('include', '/albums/1')
  })

  it('should have title', () => {
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('have.text', 'React Frontend Project')
  })

  it('should fetch the albums', () => {
    cy.get('.MuiList-root li').should('have.length', 10)
  })

  it('should go to albums page when user clicked', () => {
    cy.get(':nth-child(1) > .MuiListItemSecondaryAction-root > [data-testid="iconButton"]')
      .click()
    cy.url().should('include', '/photos/1')
  })
})
