/// <reference types="cypress" />

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should url be equal http://localhost:3000/', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('should have title', () => {
    cy.get('.MuiToolbar-root > .MuiTypography-root').should('have.text', 'React Frontend Project')
  })

  it('should fetch the users', () => {
    cy.get('.MuiList-root li').should('have.length', 10)
  })

  it('should exist any text in li item', () => {
    cy.get(':nth-child(1) > [data-testid="listItemText"] > .MuiTypography-body1')
      .should('have.text', 'Leanne Graham')
  })

  it('should go to albums page when user clicked', () => {
    cy.get(':nth-child(1) > .MuiListItemSecondaryAction-root > [data-testid="userIconButton"]')
      .click()
    cy.url().should('include', '/albums/1')
  })
})

