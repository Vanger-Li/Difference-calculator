import getDataOfFile from './parsers.js';
import getDiffOfFiles from './getDiff.js';

const genDiff = (filepath1, filepath2) => {
  const dataOfFile1 = getDataOfFile(filepath1);
  const dataOfFile2 = getDataOfFile(filepath2);

  return getDiffOfFiles(dataOfFile1, dataOfFile2);
};

export default genDiff;
