import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

describe('Test Application', () => {

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  })

  it('should render the Header and Footer components', () => {
    render(<App />, { wrapper: BrowserRouter })
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('should take us to followers page when the link is clicked', () => {
    render(<App />, { wrapper: BrowserRouter })

    userEvent.click(screen.getByText('Followers'));
    expect(screen.getByText('FollowersPage')).toBeInTheDocument()
  })
})