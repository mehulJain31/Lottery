// to have cross platform compatibilty since we are using the path module to get the valid path
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8')

// export the object
module.exports = solc.compile(source, 1).contracts[':Lottery'];
