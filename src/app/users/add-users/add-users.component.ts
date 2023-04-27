import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor(public usersService: DataService) { }

  ngOnInit() {
  }

  getUser(index: number): string {
    return this.usersService.users[index].firstName +' '+this.usersService.users[index].secName;
  }

  updateName(index: number) {
    this.usersService.users[index].firstName = 'Some different long name';
  }

}
