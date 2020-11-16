import _ from 'lodash';

const findDiffOfFiles = (dataOfFile1, dataOfFile2) => {
  const keysOfFile1 = Object.keys(dataOfFile1);
  const keysOfFile2 = Object.keys(dataOfFile2);

  const sortedKeys = _.sortBy(_.union(keysOfFile1, keysOfFile2));

  const result = sortedKeys.map((key) => {
    if (_.isObject(dataOfFile1[key]) && _.isObject(dataOfFile2[key])) {
      return {
        name: key,
        type: 'parent',
        children: findDiffOfFiles(dataOfFile1[key], dataOfFile2[key]),
      };
    }
    if (!_.has(dataOfFile1, key)) {
      return {
        name: key,
        type: 'added',
        value: dataOfFile2[key],
      };
    }
    if (!_.has(dataOfFile2, key)) {
      return {
        name: key,
        type: 'removed',
        value: dataOfFile1[key],
      };
    }
    if (dataOfFile1[key] !== dataOfFile2[key]) {
      return {
        name: key,
        type: 'changed',
        removedValue: dataOfFile1[key],
        addedValue: dataOfFile2[key],
      };
    }
    return {
      name: key,
      type: 'unchanged',
      value: dataOfFile1[key],
    };
  });
  return result;
};

export default findDiffOfFiles;
