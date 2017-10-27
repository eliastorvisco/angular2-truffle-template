import { Injectable } from '@angular/core';

import Web3 from 'web3';
import contract from 'truffle-contract';
import * as myContractABI from '../../../truffle-src/build/contracts/MyContract.json';

@Injectable()
export class Web3Service {

  public MyContract:any;
  private myContractJSON = myContractABI;
  private myContract:any;
  

  constructor() {
    var provider = new Web3.providers.HttpProvider('http://localhost:8545');
    this.MyContract = contract(this.myContractJSON);
    this.MyContract.setProvider(provider);
    this.MyContract.defaults({
      gasPrice: 3
    });
    
    this.MyContract.deployed().then((instance) => {
      this.myContract = instance;
      console.log('MyContract Instance: ');
      console.log(this.myContract);
    });
  }

  getName() {
    return this.myContract.getName("hello");
  }
  getAge() {
    return this.myContract.getAge();
  }
}

