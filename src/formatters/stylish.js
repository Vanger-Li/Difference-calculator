import _ from 'lodash';

const makeIndent = (depth) => {
  const indent = '    ';
  return indent.repeat(depth);
};

const stringify = (node, depth) => {
  if (!_.isObject(node)) {
    return node;
  }
  const formatedValue = Object.entries(node).flatMap(([key, value]) => `${makeIndent(depth)}    ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${formatedValue.join('\n')}\n${makeIndent(depth)}}`;
};

const makeStylish = (diff) => {
  const iter = (node, depth) => {
    const stylishValues = node.flatMap((child) => {
      switch (child.type) {
        case 'added':
          return `${makeIndent(depth)}  + ${child.name}: ${stringify(child.value, depth + 1)}`;
        case 'removed':
          return `${makeIndent(depth)}  - ${child.name}: ${stringify(child.value, depth + 1)}`;
        case 'unchanged':
          return `${makeIndent(depth)}    ${child.name}: ${stringify(child.value, depth + 1)}`;
        case 'changed':
          return `${makeIndent(depth)}  - ${child.name}: ${stringify(child.removedValue, depth + 1)}\n${makeIndent(depth)}  + ${child.name}: ${stringify(child.addedValue, depth + 1)}`;
        case 'parent':
          return `${makeIndent(depth)}    ${child.name}: ${iter(child.children, depth + 1)}`;
        default:
          throw new Error(`${child.type} is unknown!`);
      }
    });
    return `{\n${stylishValues.join('\n')}\n${makeIndent(depth)}}`;
  };
  return iter(diff, 0);
};

export default makeStylish;
