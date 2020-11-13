import _ from 'lodash';

const formatValue = (value) => {
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
    const currentPath = [...path, name];
    const absolutPath = currentPath.join('.');
    switch (type) {
      case 'removed':
        return `Property '${absolutPath}' was removed`;
      case 'added':
        return `Property '${absolutPath}' was added with value: ${formatValue(value)}`;
      case 'changed':
        return `Property '${absolutPath}' was updated. From ${formatValue(removedValue)} to ${formatValue(addedValue)}`;
      case 'parent':
        return dataFormat(children, currentPath);
      case 'unchanged':
        return [];
      default:
        return `${type} is unknown!`;
    }
  }).join('\n');
  return dataFormat(diff);
};

export default makePlain;
