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

const cases = [['json', 'stylish', expectedStylish],
  ['yml', 'stylish', expectedStylish],
  ['json', 'plain', expectedPlain],
  ['yml', 'plain', expectedPlain],
  ['yml', 'json', expectedJson],
  ['json', 'json', expectedJson]];

describe('Compares two files', () => {
  test.each(cases)(
    'file1 and file2 %s, formatter %s',
    (format, formatterName, expectedResult) => {
      const result = genDiff(getFixturePath(`file1.${format}`), getFixturePath(`file2.${format}`), formatterName);
      expect(result).toEqual(expectedResult);
    },
  );
});
