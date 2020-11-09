import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Comparing two files', () => {
  expect(genDiff(readFile('file1.json'), readFile('file2.json'))).toBe(readFile('expected'));
  expect(genDiff(readFile('file1.yml'), readFile('file2.yml'))).toBe(readFile('expected'));
});
