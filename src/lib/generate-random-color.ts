import shuffle from 'lodash.shuffle';

const hex = '0123456789ABCDEF'.split('');


const generateRandomColor = (): string => {
  const shuffledHex = shuffle(hex);
  return shuffledHex.slice(0, 6).join('');
};

export default generateRandomColor;
