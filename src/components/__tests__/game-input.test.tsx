import { render, screen } from '@testing-library/react';
import GameInput from '../game-input';

describe('GameInput', () => {
  it('renders the input field with correct attributes', () => {
    render(<GameInput />);

    const input = screen.getByTestId('game-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('maxLength', '6');
    expect(input).toHaveAttribute('pattern', '[a-f|A-F|0-9]{6}');
    expect(input).toHaveAttribute('placeholder', 'C0FF33');
    expect(input).toHaveAttribute('id', 'game-input');
    expect(input).toHaveAttribute('name', 'game-input');
    expect(input).not.toBeDisabled();
  });

  it('disables the input when disabled prop is true', () => {
    render(<GameInput disabled={true} />);

    const input = screen.getByTestId('game-input');
    expect(input).toBeDisabled();
  });

  it('enables the input when disabled prop is false', () => {
    render(<GameInput disabled={false} />);

    const input = screen.getByTestId('game-input');
    expect(input).not.toBeDisabled();
  });
});
