import { render, screen } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom'




describe('Test Header', () => {
  
  it('renders header', () => {
    render(<Header />, {wrapper: BrowserRouter})

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  })
})