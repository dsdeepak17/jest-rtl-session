import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import App from '../App'

import { users } from '../data'
import userEvent from '@testing-library/user-event'


describe('Test Application', () => {

  const server = setupServer(
    rest.get('https://dummyjson.com/users', (req, res, ctx) => {
      return res(ctx.json({ users }))
    }),
  )

  beforeAll(() => server.listen())

  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  })

  it('should render the Header and Footer components', () => {
    render(<App />, { wrapper: BrowserRouter })
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('handles server error with error boundary', async () => {
    //write test here
    server.use(
      rest.get('https://dummyjson.com/users', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    const {debug} = render(<App />, { wrapper: BrowserRouter})

    userEvent.click(screen.getByText('Followers'))

    const errorMessageItem = await screen.findByText(/something went wrong/i)

    expect(errorMessageItem).toBeInTheDocument()
  })
})