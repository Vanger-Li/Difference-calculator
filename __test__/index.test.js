import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFixture('expectedStylish').trim();
const expectedPlain = readFixture('expectedPlain').trim();
const expectedJson = readFixture('expectedJson');

const formats = [
  'json',
  'yml',
];

test.each(formats)('Compares two %s files', (format) => {
  const path2 = getFixturePath(`file2.${format}`);
  const path1 = getFixturePath(`file1.${format}`);

  expect(genDiff(path1, path2)).toEqual(expectedStylish);
  expect(genDiff(path1, path2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(path1, path2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(path1, path2, 'json')).toEqual(expectedJson);
});
