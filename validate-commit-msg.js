#!/usr/bin/env/ node

const fs = require('fs');

const commitMessageFile = process.argv[2];
const textMessage = fs.readFileSync(commitMessageFile, 'utf-8').trim();

const pattern = /^ASTONJS-([^0]\d*) (\[feat\]|\[fix\]|\[chore\]):/;

if (pattern.test(textMessage)) {
  console.log('Commit message validation passed.');
  process.exit(0);
}

console.log('Error: Your commit massege must begin with ASTONJS-Number [feat]/[fix]/[chore]:');
process.exit(1);
