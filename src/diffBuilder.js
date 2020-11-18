import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  const sortedKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return {
        name: key,
        type: 'added',
        value: data2[key],
      };
    }
    if (!_.has(data2, key)) {
      return {
        name: key,
        type: 'removed',
        value: data1[key],
      };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        name: key,
        type: 'parent',
        children: buildDiff(data1[key], data2[key]),
      };
    }
    if (data1[key] !== data2[key]) {
      return {
        name: key,
        type: 'changed',
        removedValue: data1[key],
        addedValue: data2[key],
      };
    }
    return {
      name: key,
      type: 'unchanged',
      value: data1[key],
    };
  });
  return result;
};

export default buildDiff;
