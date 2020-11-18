import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const makePlain = (diff) => {
  const dataFormat = (data, path = []) => data.flatMap(({
    name, type, value, addedValue, removedValue, children,
  }) => {
    const property = [...path, name].join('.');
    switch (type) {
      case 'removed':
        return `Property '${property}' was removed`;
      case 'added':
        return `Property '${property}' was added with value: ${stringify(value)}`;
      case 'changed':
        return `Property '${property}' was updated. From ${stringify(removedValue)} to ${stringify(addedValue)}`;
      case 'parent':
        return dataFormat(children, [...path, name]);
      case 'unchanged':
        return [];
      default:
        throw new Error(`${type} is unknown!`);
    }
  }).join('\n');
  return dataFormat(diff);
};

export default makePlain;
