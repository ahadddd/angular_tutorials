import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  usersData: any = [];
  constructor() { }

  ngOnInit() {
    let data = new DataService();
    this.usersData = data.users;
  }

  getUser(index: number): string {
    return this.usersData[index].firstName +' '+this.usersData[index].secName;
  }

  updateName(index: number) {
    this.usersData[index].firstName = 'Some different long name';
  }

}
