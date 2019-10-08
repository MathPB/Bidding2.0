const path = require('path');
const fs = require('fs');
const solc = require('solc');

const biddingPath = path.resolve(__dirname, 'contracts', 'Bidding.sol');
const source = fs.readFileSync(biddingPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Bidding'];