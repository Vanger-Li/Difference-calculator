import makeStylish from './stylish.js';
import makePlain from './plain.js';

const selectFormat = (diff, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(diff);
    case 'plain':
      return makePlain(diff);
    default:
      return `${format} is unknown!`;
  }
};

export default selectFormat;
