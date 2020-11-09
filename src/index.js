import getDataFromFile from './parsers.js';
import getDiff from './getDiff.js';

const genDiff = (filepath1, filepath2) => {
  const dataOfFiles1 = getDataFromFile(filepath1);
  const dataOfFiles2 = getDataFromFile(filepath2);

  return getDiff(dataOfFiles1, dataOfFiles2);
};

export default genDiff;
