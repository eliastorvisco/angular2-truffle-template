import { Component } from '@angular/core';
import { Web3Service } from './services/web3.service';
import { UserInfoService } from './services/user-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  age:number;
  private Web3:any;
  private UserInfo:any;

  constructor () {
    this.Web3 = new Web3Service();
    this.UserInfo = new UserInfoService();
  }

  public onRefresh() {
    this.refreshName();
    this.refreshAge();
  }
  async refreshName() {
    //this.name = await this.Web3.getName();
    // this.Web3.getName().then((_name) => {
    //   this.name = _name;
    // }).catch(function(error) {
    //   console.log('An error ocurred');
    // });
    this.name = await this.UserInfo.getName();
  }

  async refreshAge() {
    this.age = await this.Web3.getAge();
  }

  public setName(_name:string) {
    console.log(_name);
  }

}
