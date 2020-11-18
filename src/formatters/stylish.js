import _ from 'lodash';

const indent = (depth) => '  '.repeat(depth);

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const formatedValue = keys.map((key) => `${key}: ${formatValue(value[key], depth + 2)}`);
  return `{\n${indent(depth + 3)}${formatedValue.join(`\n${indent(depth + 3)}`)}\n${indent(depth + 1)}}`;
};

const makeStylish = (diff) => {
  const dataFormat = (data, depth = 1) => data.map(({
    name, type, value, removedValue, addedValue, children,
  // eslint-disable-next-line array-callback-return
  }) => {
    switch (type) {
      case 'parent':
        return `${indent(depth + 1)}${name}: {\n${dataFormat(children, depth + 2)}\n${indent(depth + 1)}}`;
      case 'added':
        return `${indent(depth)}+ ${name}: ${formatValue(value, depth)}`;
      case 'changed':
        return `${indent(depth)}- ${name}: ${formatValue(removedValue, depth)}\n${indent(depth)}+ ${name}: ${formatValue(addedValue, depth)}`;
      case 'removed':
        return `${indent(depth)}- ${name}: ${formatValue(value, depth)}`;
      case 'unchanged':
        return `${indent(depth)}  ${name}: ${formatValue(value, depth)}`;
      default:
        throw new Error(`${type} is unknown!`);
    }
  }).join('\n');
  return `{\n${dataFormat(diff)}\n}`;
};

export default makeStylish;
