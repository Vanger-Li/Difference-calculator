import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each(['yml', 'json'])('Comparing two %s files', (format) => {
  expect(genDiff(`file1.${format}`, `file2.${format}`, 'stylish')).toEqual(readFile('expectedStylish'));
  expect(genDiff(`file1.${format}`, `file2.${format}`, 'plain')).toEqual(readFile('expectedPlain'));
});
