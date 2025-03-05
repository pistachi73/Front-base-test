import React from 'react';
import ExpensiveComponent from './expensive-component';
import { Game } from './game';

const Application: React.FC = () => {
  return (
    <main className="mx-auto my-8 flex w-96 flex-col gap-8">
      <Game />
      <ExpensiveComponent />
    </main>
  );
};

export default Application;
