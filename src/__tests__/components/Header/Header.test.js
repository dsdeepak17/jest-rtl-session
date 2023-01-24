import { render, screen } from '../../../test-utils'
import Header from '../../../components/Header'




describe('Test Header', () => {

  it('renders header', () => {
    render(<Header />)

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  })
})