import React, { memo } from 'react';

// Dado que el componente es pesado, se utiliza memo para evitar renderizaciones innecesarias
const ExpensiveComponentBase: React.FC = memo(() => {
  return (
    <div className="animate-pulse border border-orange-700 bg-orange-400 px-4 py-2 text-center font-bold">
      🗑️🔥 I am expensive! 🔥🗑️
    </div>
  );
});

// La función makeExpensive no funciona con memo.
// Para probar el componente, se debe desactivar memo.
// const ExpensiveComponent = makeExpensive(ExpensiveComponentBase, 100);

export default ExpensiveComponentBase;
