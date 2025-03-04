import React from 'react';

interface GameInputProps {
  disabled?: boolean;
}

const GameInput: React.FC<GameInputProps> = ({ disabled }) => {
  return (
    <label htmlFor="game-input">
      Enter some letters
      <input
        id="game-input"
        name="game-input"
        type="text"
        maxLength={6}
        pattern="[a-f|A-F|0-9]{6}"
        placeholder="C0FF33"
        disabled={disabled}
        data-testid="game-input"
      />
    </label>
  );
};

export default GameInput;
