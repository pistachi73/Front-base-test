import { memo } from 'react';
import { makeExpensive } from '../lib/sleep';

const ExpensiveComponentBase = memo(() => {
  return (
    <div className="animate-pulse border border-orange-700 bg-orange-400 px-4 py-2 text-center font-bold">
      🗑️🔥 I am expensive! 🔥🗑️
    </div>
  );
});

const ExpensiveComponent = makeExpensive(ExpensiveComponentBase, 100);

export default ExpensiveComponentBase;
