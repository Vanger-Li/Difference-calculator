import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildDiff from './diffBuilder.js';
import format from './formatters/index.js';

const readFile = (filePath) => fs.readFileSync(filePath, 'utf8');

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const format1 = path.extname(filepath1).slice(1);
  const format2 = path.extname(filepath2).slice(1);
  const parsedData1 = parse(data1, format1);
  const parsedData2 = parse(data2, format2);

  return format(buildDiff(parsedData1, parsedData2), outputFormat);
};

export default genDiff;
