import { render, screen, cleanup } from '@testing-library/react'
import FollowersPage from '../../pages/FollowersPage'
import { users } from '../../data';
import {rest} from 'msw'
import {setupServer} from 'msw/node'

describe('Test Followers Page', () => {

  const server = setupServer(
    rest.get('https://dummyjson.com/users', (req, res, ctx) => {
      return res(ctx.json({users}))
    }),
  )
  
  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    cleanup();
  });
  afterAll(() => server.close())


  it("should render followers page with 'loading...' text initially", () => {
    render(<FollowersPage />)

    expect(screen.getByTestId('followers-page')).toHaveTextContent('Loading...')
  })

  it('should render the followers list', async () => {
    const { debug } = render(<FollowersPage />)

    const followerList = await screen.findByTestId('follower-list')

    expect(followerList).toBeInTheDocument()
    expect(followerList).toHaveTextContent(/deepak singh/i)
  })
})  