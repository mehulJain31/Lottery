// the deployment script
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3  = require('web3');
const {interface, bytecode} = require('../compile');


const provider = new HDWalletProvider(
  'image unaware hello canoe lake aware that blur duty shrug behind flame',
  'https://rinkeby.infura.io/v3/8173d7ea9c654c479d27e81867eee88a'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();


  console.log('Attempting to deploy from account', accounts[0]);


  // contract deployment statement
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data:bytecode})
  .send({gas: '1000000', from : accounts[0] });

  console.log("after deployment to ", result.options.address);
  provider.engine.stop();

};

deploy();
