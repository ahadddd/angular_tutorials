import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(public usersService: DataService) { }

  ngOnInit(): void {
    
    this.users = this.usersService.users    

  }
}
