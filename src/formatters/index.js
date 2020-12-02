import makeStylish from './stylish.js';
import makePlain from './plain.js';

const format = (diff, outputFormat) => {
  switch (outputFormat) {
    case 'stylish':
      return makeStylish(diff);
    case 'plain':
      return makePlain(diff);
    case 'json':
      return JSON.stringify(diff);
    default:
      throw new Error(`${outputFormat} is unknown!`);
  }
};

export default format;
