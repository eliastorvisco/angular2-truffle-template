import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';

@Injectable()
export class UserInfoService {

  private web3:any;
  constructor() { 
    this.web3 = new Web3Service();
  }

  public async getName() {
    return this.web3.getName().then((_name)=> {
      return _name;
    }).catch((error)=>{
      return 'error';
    });
  }

}
