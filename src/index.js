/* eslint-disable array-callback-return */
import _ from 'lodash';

const genDiff = (readFile1, readFile2) => {
  const dataFromFile1 = JSON.parse(readFile1);
  const dataFromFile2 = JSON.parse(readFile2);

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
      return `    ${key}: ${dataFromFile1[key]}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
