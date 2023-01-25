import { render, screen, cleanup } from '../../test-utils'
import FollowersPage from '../../pages/FollowersPage'
import { users } from '../../data';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('Test Followers Page', () => {

  const server = setupServer(
    rest.get('https://dummyjson.com/users', (req, res, ctx) => {
      return res(ctx.json({ users }))
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => {
    server.resetHandlers()
    cleanup();
  });
  afterAll(() => server.close())


  it("should render 3 glimmer lines when loading the page initially", () => {
    render(<FollowersPage />)

    expect(screen.getAllByTestId('glimmer-line').length).toBe(3)
  })

  it('should render the followers list', async () => {
    const { debug } = render(<FollowersPage />)

    const followerList = await screen.findByTestId('follower-list')

    expect(followerList).toBeInTheDocument()
    expect(followerList).toHaveTextContent(/deepak singh/i)
  })

  it('should render 6 items in the followerList', async () => {
    const { debug } = render(<FollowersPage />)

    const followerItems = await screen.findAllByTestId('follower-item')

    expect(followerItems.length).toBe(6)
  })
})  