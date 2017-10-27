var MyContract = artifacts.require("./MyContract.sol");

module.exports = function(deployer) {
  // deployer.link(<other contract which MyContract will use, 
  // remember to import and deploy>, MyContract);
  deployer.deploy(MyContract);
};
