import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/libs/data.service';
// import {import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { map, catchError } from 'rxjs/operators;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];
  usersList: any = [];
  loading = '';
  constructor(public usersService: DataService, private http: HttpClient) { }

  ngOnInit(): void {

    this.users = this.usersService.users

  }

  getUsersFromServer() {
    this.loading = 'loading';
    const userReq = this.http.get('https://reqres.in/api/users?delay=3');
    userReq.subscribe({
      next: (res: any) => {
        this.usersList = res.data;
        this.loading = 'done';
      },
      error: () => {
        this.loading = 'error';
      }
    })
  }
}
