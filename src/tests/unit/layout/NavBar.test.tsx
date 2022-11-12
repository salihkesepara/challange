import { render, screen, cleanup } from '@testing-library/react'
import Navbar from 'src/layout/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'

beforeEach(() => {
  cleanup()
  render(<Router><Navbar /></Router>)
})

describe('NavBar', () => {
  it('should form render correctly', () => {
    expect(screen.getByText('React Frontend Project')).toBeInTheDocument()
  })

  it('btnLogo should have correct props', () => {
    const btnLogo = screen.getByTestId('btnLogo')
    expect(btnLogo).toHaveAttribute('aria-label', 'menu')
    expect(btnLogo).toHaveAttribute('tabindex', '0')
    expect(btnLogo).toHaveAttribute('type', 'button')
  })

  it('iconApi should have correct props', () => {
    const iconApi = screen.getByTestId('iconApi')
    expect(iconApi).toHaveAttribute('aria-hidden', 'true')
    expect(iconApi).toHaveAttribute('focusable', 'false')
    expect(iconApi).toHaveAttribute('viewBox', '0 0 24 24')
  })
})
