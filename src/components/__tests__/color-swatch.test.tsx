import { render, screen } from '@testing-library/react';
import ColorSwatch from '../color-swatch';

describe('ColorSwatch', () => {
  it('renders with the correct background color', () => {
    const color = 'FF5733';
    render(<ColorSwatch color={color} data-testid="color-swatch" />);

    const swatch = screen.getByTestId('color-swatch');
    expect(swatch).toHaveStyle({ backgroundColor: '#FF5733' });
  });
});
