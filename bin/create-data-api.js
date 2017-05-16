#!/usr/bin/env node

const cp = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s the name of your data API project? ', (name) => {
  cp.execFileSync('git', [
    'clone',
    '-o',
    'nodejs-api-starter',
    '-b',
    'master',
    '--single-branch',
    'https://github.com/kriasoft/nodejs-api-starter.git',
    name,
  ], { stdio: 'inherit' });
  console.log(`
Done! In order to start the project, simply run:

  docker-compose up

For more information visit https://reactstarter.com/nodejs`);
  process.exit(0);
});
