import { fileURLToPath } from 'url';
import { dirname, join, extname } from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getDataFromFile = (filepath) => {
  const absolutPath = (filename) => join(__dirname, '..', '__fixtures__', filename);
  const fileContent = fs.readFileSync(absolutPath(filepath), 'utf-8');
  const format = extname(filepath);

  let parse;
  switch (format) {
    case '.yml':
      parse = yaml.safeLoad;
      break;
    default:
      parse = JSON.parse;
  }

  return parse(fileContent);
};
export default getDataFromFile;
