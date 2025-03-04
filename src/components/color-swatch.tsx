import React from 'react';

interface ColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, ...props }) => {
  return (
    <div
      className="h-96 w-96"
      data-testid="color-swatch"
      {...props}
      style={{ backgroundColor: '#' + color }}
    />
  );
};

export default ColorSwatch;
