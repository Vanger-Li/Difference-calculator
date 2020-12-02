import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import findDiffOfFiles from './diffBuilder.js';
import selectFormat from './formatters/index.js';

const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const extensionOfFile1 = path.extname(filepath1).slice(1);
  const extensionOfFile2 = path.extname(filepath2).slice(1);
  const parsedData1 = parse(data1, extensionOfFile1);
  const parsedData2 = parse(data2, extensionOfFile2);

  return selectFormat(findDiffOfFiles(parsedData1, parsedData2), format);
};

export default genDiff;
