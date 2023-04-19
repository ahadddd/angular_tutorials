import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';



@NgModule({
  declarations: [
    UsersComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'add',
        component: AddUsersComponent
      }
    ])
  ]
})
export class UsersModule { }
