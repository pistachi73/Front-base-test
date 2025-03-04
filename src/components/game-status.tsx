import clsx from 'clsx';
import React from 'react';

interface GameStatusProps {
  hasGuessed: boolean;
  isWinner: boolean;
}

type StatusType = 'failure' | 'success' | 'default';

const GameStatus: React.FC<GameStatusProps> = ({ hasGuessed, isWinner }) => {
  const statusMessages: Record<StatusType, string> = {
    failure: 'Nope. Sorry.',
    success: 'Wow, you actually won.',
    default: 'Try and guess, I guess.',
  };

  let statusType: StatusType = 'default';
  if (hasGuessed) {
    statusType = isWinner ? 'success' : 'failure';
  }

  return (
    <div
      className={clsx('border p-4', {
        'border-cyan-700 bg-cyan-300 text-cyan-900': statusType === 'default',
        'border-red-900 bg-red-300 text-red-700': statusType === 'failure',
        'border-green-700 bg-green-300 text-green-900':
          statusType === 'success',
      })}
      role="status"
      aria-live="polite"
    >
      {statusMessages[statusType]}
    </div>
  );
};

export default GameStatus;
