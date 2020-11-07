import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import lodash from 'lodash';
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  userData;
  ordersList;
  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
   this.userService.accountSettings()
    .subscribe( (data) =>{
      console.log("user Details",data);
      this.userData=data;
      this.ordersList=this.userData.orderList.map(item=>{
        return item.product;
      })
      this.ordersList=lodash.flattenDeep(this.ordersList)
      console.log(" UserData",this.userData);
      console.log(" this.ordersList ",  this.ordersList);
    });
  }
  

}