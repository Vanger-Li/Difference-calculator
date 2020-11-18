import yaml from 'js-yaml';

const parse = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case ('yml' || 'yaml'):
      return yaml.safeLoad(data);
    default:
      throw new Error(`${format} is unknown!`);
  }
};

export default parse;
