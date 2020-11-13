import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const absolutPath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const expectedFile = (fs.readFileSync(absolutPath('expectedPlain'), 'utf-8'));

test('Comparing two JSON files', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(expectedFile);
});

test('Comparing two Yaml files', () => {
  expect(genDiff('file1.yml', 'file2.yml')).toEqual(expectedFile);
});
