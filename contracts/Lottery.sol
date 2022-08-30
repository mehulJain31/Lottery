// Mehul's first contract\
pragma solidity ^0.4.25;

contract Lottery {
  address public manager;
  address[] public players;

  function Lottery() public{
    // assign a manager on deployment
    manager = msg.sender;
  }

// payable means that the function expects to recieve ether
// check for unique players
  function enter() public payable {
    require(msg.value > .01 ether);
    players.push(msg.sender);
  }

  function pickWinner() public onlyManagerPrivilege {
    // generate random number between 0 and players.length - 1
    uint256 index = random() % players.length;
    players[index].transfer(address(this).balance);  //return an address like 0x1089493893abc03o340
    players = new address[](0); //reset the contract and clear the addressee to avoid re-deploying the contract
  }

  function getPlayers() public view returns (address[]) {
    return players;
  }

  modifier onlyManagerPrivilege() {
     // only manager can pick the winner i.e. the account that deployed the contract
    require(msg.sender == manager);
    _;
  }

  function random() private view returns (uint256) {
      return uint256(keccak256(abi.encodePacked(block.difficulty, now, players)));
  }
}
