#!/usr/bin/env node

import program from 'commander';

program
    .version('1.0.0', '-V', '--version', 'output the version number')
    .description('Compares two configuration files and shows a difference.')
 

program.parse(process.argv);