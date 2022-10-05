const path = require('path');
const solc = require('solc'); // Solidity module
const fs = require('fs-extra'); // File system extra module

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync('buildPath');

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // Checks to see if a directory exists, if not creates it


console.log(output);
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json' ),
    output[contract]
  );
}
