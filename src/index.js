import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const genDiff = (pathToFile1, pathToFile2) => {
    const file1 = path.resolve(process.cwd(), pathToFile1);
    const file2 = path.resolve(process.cwd(), pathToFile2);

    const dataFromFile1 = JSON.parse(fs.readFileSync(file1, 'utf8'));
    const dataFromFile2 = JSON.parse(fs.readFileSync(file2, 'utf8'));

    const keysOfFile1 = Object.keys(dataFromFile1);
    const keysOfFile2 = Object.keys(dataFromFile2);

    const sortKeys = _.uniq([...keysOfFile1, ...keysOfFile2].sort());

    const result = sortKeys.map((key) => {
        if (!_.has(dataFromFile1, key)) {
            return `+ ${key}: ${dataFromFile2[key]}`;
        }
        if (!_.has(dataFromFile2, key)) {
            return `- ${key}: ${dataFromFile1[key]}`;
        }
        if (dataFromFile1[key] !== dataFromFile2[key]) {
            return `- ${key}: ${dataFromFile1[key]}\n + ${key}: ${dataFromFile2[key]}`;
        }
        if (dataFromFile1[key] !== dataFromFile2[key]) {
            return `- ${key}: ${dataFromFile1[key]}`;
        }
    })
    console.log(`{\n${result.join('\n')}\n}`);
};

export default genDiff;