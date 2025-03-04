import React, { FormEvent, useCallback, useRef, useState } from 'react';
import generateRandomColor from '../lib/generate-random-color';
import ColorSwatch from './color-swatch';
import ExpensiveComponent from './expensive-component';
import GameInput from './game-input';
import GameStatus from './game-status';

const Application: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [correctAnswer, setCorrectAnswer] = useState(generateRandomColor());
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = formRef.current;
      if (!form) return;

      const formData = new FormData(form);
      const inputValue = formData.get('game-input')?.toString() || '';

      if (correctAnswer === inputValue) {
        setIsWinner(true);
      }
      setHasGuessed(true);
    },
    [correctAnswer],
  );

  const handleReset = useCallback(() => {
    setCorrectAnswer(generateRandomColor());
    setHasGuessed(false);
    setIsWinner(false);
    formRef.current?.reset();
  }, []);

  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <ColorSwatch color={correctAnswer} />
      <form ref={formRef} className="flex items-end" onSubmit={handleSubmit}>
        <GameInput disabled={hasGuessed} />
        <button
          className="whitespace-nowrap"
          type="submit"
          disabled={hasGuessed}
        >
          Take a Guess
        </button>
      </form>
      <GameStatus isWinner={isWinner} hasGuessed={hasGuessed} />
      <button onClick={handleReset} type={hasGuessed ? 'submit' : 'button'}>
        Reset Color
      </button>
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
