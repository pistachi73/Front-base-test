import { render, screen } from '@testing-library/react';
import GameStatus from '../game-status';

describe('GameStatus', () => {
  it('displays default message when hasGuessed is false', () => {
    render(<GameStatus hasGuessed={false} isWinner={false} />);

    const statusElement = screen.getByRole('status');
    expect(statusElement).toHaveTextContent('Try and guess, I guess.');
  });

  it('displays success message when hasGuessed is true and isWinner is true', () => {
    render(<GameStatus hasGuessed={true} isWinner={true} />);

    const statusElement = screen.getByRole('status');
    expect(statusElement).toHaveTextContent('Wow, you actually won.');
  });

  it('displays failure message when hasGuessed is true and isWinner is false', () => {
    render(<GameStatus hasGuessed={true} isWinner={false} />);

    const statusElement = screen.getByRole('status');
    expect(statusElement).toHaveTextContent('Nope. Sorry.');
  });
});
