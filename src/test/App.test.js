import { render, screen } from '@testing-library/react'
import App from '../App'

test('render', () => {
  render(<App />)
  const linkElement = screen.getByText(/Welcome/i)
  expect(linkElement).toBeInTheDocument()
})
