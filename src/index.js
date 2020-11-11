import getDataFromFile from './parsers.js';
import getDiffOfFiles from './getDiff.js';
import makeStylish from './stylish.js';

const genDiff = (filepath1, filepath2) => {
  const dataOfFiles1 = getDataFromFile(filepath1);
  const dataOfFiles2 = getDataFromFile(filepath2);

  return makeStylish(getDiffOfFiles(dataOfFiles1, dataOfFiles2));
};

export default genDiff;
