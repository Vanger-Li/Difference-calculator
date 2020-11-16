import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import findDiffOfFiles from './findDiff.js';
import selectFormat from './formatters/index.js';

const getDataOfFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), '__fixtures__', filepath);
  return fs.readFileSync(absolutePath, 'utf8');
};

const genDiff = (filepath1, filepath2, format) => {
  const dataOfFile1 = getDataOfFile(filepath1);
  const dataOfFile2 = getDataOfFile(filepath2);
  const extensionOfFile1 = path.extname(filepath1).slice(1);
  const extensionOfFile2 = path.extname(filepath2).slice(1);
  const parsedData1 = parser(dataOfFile1, extensionOfFile1);
  const parsedData2 = parser(dataOfFile2, extensionOfFile2);

  return selectFormat(findDiffOfFiles(parsedData1, parsedData2), format);
};

export default genDiff;
