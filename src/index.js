import getDataFromFile from './parsers.js';
import getDiffOfFiles from './getDiff.js';
import selectFormat from './formatters/index.js';

const genDiff = (filepath1, filepath2) => {
  const dataOfFiles1 = getDataFromFile(filepath1);
  const dataOfFiles2 = getDataFromFile(filepath2);

  const diff = getDiffOfFiles(dataOfFiles1, dataOfFiles2);
  return selectFormat(diff);
};

export default genDiff;
