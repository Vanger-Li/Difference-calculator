/* eslint-disable array-callback-return */
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (path1, path2) => {
  const fullPathToFile1 = path.resolve(process.cwd(), path1);
  const fullPathToFile2 = path.resolve(process.cwd(), path2);

  const dataFromFile1 = JSON.parse(fs.readFileSync(fullPathToFile1, 'utf8'));
  const dataFromFile2 = JSON.parse(fs.readFileSync(fullPathToFile2, 'utf8'));

  const keysOfFile1 = Object.keys(dataFromFile1);
  const keysOfFile2 = Object.keys(dataFromFile2);

  const sortKeys = _.uniq([...keysOfFile1, ...keysOfFile2].sort());

  // eslint-disable-next-line consistent-return
  const result = sortKeys.map((key) => {
    if (!_.has(dataFromFile1, key)) {
      return `  + ${key}: ${dataFromFile2[key]}`;
    }
    if (!_.has(dataFromFile2, key)) {
      return `  - ${key}: ${dataFromFile1[key]}`;
    }
    if (dataFromFile1[key] !== dataFromFile2[key]) {
      return `  - ${key}: ${dataFromFile1[key]}\n  + ${key}: ${dataFromFile2[key]}`;
    }
    if (dataFromFile1[key] === dataFromFile2[key]) {
      return `  - ${key}: ${dataFromFile1[key]}`;
    }
  });
  console.log(`{\n${result.join('\n')}\n}`);
};

export default genDiff;
