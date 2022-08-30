// const assert = require('assert');
// const ganache = require('ganache-cli');
//
//
// // https://rinkeby.infura.io/v3/8173d7ea9c654c479d27e81867eee88a
//
// //uppercase because it is a constructor function
// // uppercase is a constructor
// const Web3 = require('web3');
//
// // lowercase is instance
// const web3 = new Web3(ganache.provider());
//
// const { interface, bytecode } = require('../compile');
//
// // retrieve list of unlocked accounts with ganache
// let accounts;
// let inbox;
// let initString = 'Hi there my first contract';
// beforeEach(async () => {
//   // Get a list of all accounts
//   accounts = await web3.eth.getAccounts();
//
//   // Use one account and deploy a contract
//   inbox = await new web3.eth.Contract(JSON.parse(interface))
//   .deploy({
//     data:bytecode,
//     arguments : [initString]
//   })
//   .send({ from:accounts[0], gas:'1000000' })
// });
//
// describe ('Inbox', () => {
//   it('deploys a contract', () => {
//       // check if an address exists here
//       assert.ok(inbox.options.address);
//   });
//
//   it('has a default message', async () => {
//       // call a method on the contracts
//       const message = await inbox.methods.message().call();
//       assert.equal(message, initString);
//   });
//
//   it('can set a message', async () =>{
//
//     await inbox.methods.setMessage("this is the updated message").send({from: accounts[0]});
//     const message = await inbox.methods.message().call();
//     assert.equal(message, "this is the updated message");
//   });
// });
