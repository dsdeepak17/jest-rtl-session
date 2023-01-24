import { cleanup, render, screen } from '../test-utils'
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
    render(<App />)
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
    const {debug} = render(<App />)

    userEvent.click(screen.getByText('Followers'))

    const errorMessageItem = await screen.findByText(/Error has occured/i)
    expect(errorMessageItem).toBeInTheDocument()
    debug()
  })
})