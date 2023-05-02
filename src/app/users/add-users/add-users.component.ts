import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  userForm!: FormGroup;
    
  
  
  constructor(public usersService: DataService) {
  }
  ngOnInit() {
    this.userForm = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl()
    })
  }

  getUser(index: number): string {
    return this.usersService.users[index].firstName + ' ' + this.usersService.users[index].secName;
  }

  updateName(index: number) {
    this.usersService.users[index].firstName = 'A different name';
  }

  saveUser() {
    alert("User added!");
  }

}
