/* eslint-disable array-callback-return */
import _ from 'lodash';

const getDiffOfFiles = (dataOfFile1, dataOfFile2) => {
  const keysOfFile1 = Object.keys(dataOfFile1);
  const keysOfFile2 = Object.keys(dataOfFile2);

  const sortKeys = _.uniq([...keysOfFile1, ...keysOfFile2].sort());

  // eslint-disable-next-line consistent-return
  const result = sortKeys.map((key) => {
    if (!_.has(dataOfFile1, key)) {
      return `  + ${key}: ${dataOfFile2[key]}`;
    }
    if (!_.has(dataOfFile2, key)) {
      return `  - ${key}: ${dataOfFile1[key]}`;
    }
    if (dataOfFile1[key] !== dataOfFile2[key]) {
      return `  - ${key}: ${dataOfFile1[key]}\n  + ${key}: ${dataOfFile2[key]}`;
    }
    if (dataOfFile1[key] === dataOfFile2[key]) {
      return `    ${key}: ${dataOfFile1[key]}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default getDiffOfFiles;
