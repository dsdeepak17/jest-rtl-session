import { render, screen, cleanup, waitFor } from '@testing-library/react'
import FollowersPage from '../../pages/FollowersPage'

describe('Test Followers Page', () => {

  afterEach(() => {
    cleanup();
    jest.resetModules();
  });

  it("should render followers page with 'loading...' text initially", () => {
    render(<FollowersPage />)

    expect(screen.getByTestId('followers-page')).toHaveTextContent('Loading...')
  })

  it('should render the followers list after some time', async () => {
    const { debug } = render(<FollowersPage />)

    await waitFor(() => {
      expect(screen.getByTestId('follower-list')).toBeInTheDocument()
      debug()
    })
  })
})  