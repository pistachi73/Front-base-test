import { render, screen } from '@testing-library/react';
import Application from '../application';

jest.mock('../expensive-component', () => ({
  __esModule: true,
  default: () => (
    <div data-testid="mocked-expensive-component">
      Mocked Expensive Component
    </div>
  ),
}));

describe('Application', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the application with all components', async () => {
    render(<Application />);

    const gameInput = screen.getByTestId('game-input');
    expect(gameInput).toBeInTheDocument();

    const expensiveComponent = screen.getByTestId('mocked-expensive-component');
    expect(expensiveComponent).toBeInTheDocument();
    expect(expensiveComponent).toHaveTextContent('Mocked Expensive Component');
  });
});
