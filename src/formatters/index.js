import makeStylish from './stylish.js';
import makePlain from './plain.js';

const format = (diff, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return makeStylish(diff);
    case 'plain':
      return makePlain(diff);
    default:
      return `'${outputFormat}' is unknown!`;
  }
};

export default format;
