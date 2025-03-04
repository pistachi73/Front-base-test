import shuffle from 'lodash.shuffle';

const hex = '0123456789ABCDEF'.split('');

const generateRandomColor = (): string =>
  shuffle(hex).slice(0, 6).join('');

export default generateRandomColor;
