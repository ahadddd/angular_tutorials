import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData: any = [];

  constructor() { }

  ngOnInit(): void {
    
    let data = new DataService();
    this.usersData = data.users;

  }
}
