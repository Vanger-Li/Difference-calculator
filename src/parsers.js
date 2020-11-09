import { extname } from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const getDataOfFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const format = extname(filePath);

  let parse;
  switch (format) {
    case '.yml':
      parse = yaml.safeLoad;
      break;
    default:
      parse = JSON.parse;
  }

  return parse(data);
};
export default getDataOfFile;
