import { memo } from 'react';

const GameStatus = memo(({ hasGuessed, isWinner }) => {
  const statusMessages = {
    failure: 'Nope. Sorry.',
    success: 'Wow, you actually won.',
    default: 'Try and guess, I guess.',
  };

  let statusType = 'default';
  if (hasGuessed) {
    statusType = isWinner ? 'success' : 'failure';
  }

  const statusStyles = {
    failure: 'p-4 text-red-700 bg-red-300 border border-red-900',
    success: 'p-4 text-green-700 bg-green-300 border border-green-900',
    default: 'p-4 border border-cyan-700 bg-cyan-300 text-cyan-900',
  };

  return (
    <div className={statusStyles[statusType]} role="status" aria-live="polite">
      {statusMessages[statusType]}
    </div>
  );
});

GameStatus.displayName = 'GameStatus';

export default GameStatus;
