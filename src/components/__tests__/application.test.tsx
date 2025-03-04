import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Application from '../application';

jest.mock('../../lib/generate-random-color', () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValue('ABCDEF');
  return {
    __esModule: true,
    default: mockFn,
  };
});

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
    const generateRandomColor =
      require('../../lib/generate-random-color').default;
    generateRandomColor.mockReturnValue('ABCDEF');
  });

  it('renders the application with all components', async () => {
    render(<Application />);

    const gameInput = screen.getByTestId('game-input');
    expect(gameInput).toBeInTheDocument();

    const gameStatus = screen.getByRole('status');
    expect(gameStatus).toBeInTheDocument();

    const guessButton = screen.getByRole('button', { name: /take a guess/i });
    expect(guessButton).toBeInTheDocument();

    const resetButton = screen.getByRole('button', { name: /reset color/i });
    expect(resetButton).toBeInTheDocument();
  });

  it('disables the input and guess button after submitting a guess', async () => {
    const user = userEvent.setup();
    render(<Application />);

    const input = screen.getByTestId('game-input');
    const guessButton = screen.getByRole('button', { name: /take a guess/i });

    expect(input).not.toBeDisabled();
    expect(guessButton).not.toBeDisabled();

    await user.type(input, '123456');
    await user.click(guessButton);

    expect(input).toBeDisabled();
    expect(guessButton).toBeDisabled();
  });

  it('shows success message when the guess matches the color', async () => {
    const user = userEvent.setup();
    render(<Application />);

    const input = screen.getByTestId('game-input');
    const guessButton = screen.getByRole('button', { name: /take a guess/i });

    await user.type(input, 'ABCDEF');
    await user.click(guessButton);

    const gameStatus = screen.getByRole('status');
    expect(gameStatus).toHaveTextContent('Wow, you actually won.');
  });

  it('shows failure message when the guess does not match the color', async () => {
    const user = userEvent.setup();
    render(<Application />);

    const input = screen.getByTestId('game-input');
    const guessButton = screen.getByRole('button', { name: /take a guess/i });

    await user.type(input, '123456');
    await user.click(guessButton);

    const gameStatus = screen.getByRole('status');
    expect(gameStatus).toHaveTextContent('Nope. Sorry.');
  });

  it('resets the game state when reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<Application />);

    const input = screen.getByTestId('game-input');
    const guessButton = screen.getByRole('button', { name: /take a guess/i });
    const resetButton = screen.getByRole('button', { name: /reset color/i });

    await user.type(input, '123456');
    await user.click(guessButton);

    expect(input).toBeDisabled();
    expect(guessButton).toBeDisabled();

    const gameStatusBefore = screen.getByRole('status');
    expect(gameStatusBefore).toHaveTextContent('Nope. Sorry.');

    await user.click(resetButton);

    expect(input).not.toBeDisabled();
    expect(guessButton).not.toBeDisabled();

    const gameStatusAfter = screen.getByRole('status');
    expect(gameStatusAfter).toHaveTextContent('Try and guess, I guess.');
  });
});
