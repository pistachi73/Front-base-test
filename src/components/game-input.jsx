const GameInput = ({ disabled }) => {
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
      />
    </label>
  );
};

export default GameInput;
