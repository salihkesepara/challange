import { render, screen, cleanup } from '@testing-library/react'
import Layout from 'src/layout'
import { BrowserRouter as Router } from 'react-router-dom'

beforeEach(() => {
  cleanup()
  render(<Router><Layout /></Router>)
})

describe('Layout', () => {
  it('should form render correctly', () => {
    expect(screen.getByRole('main').className).toBe('app')
  })

  it('should contain NavBar', () => {
    const main = screen.getByRole('main')
    const navBar = screen.getByTestId('navBar')

    expect(main).toContainElement(navBar)
  })
})
