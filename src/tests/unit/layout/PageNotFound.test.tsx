import { render, screen, cleanup } from '@testing-library/react'
import PageNotFound from 'src/layout/PageNotFound'

beforeEach(() => {
  cleanup()
  render(<PageNotFound />)
})

describe('PageNotFound', () => {
  it('should form render correctly', () => {
    expect(screen.getByText('Page 404 Not Found!')).toBeInTheDocument()
  })
})

