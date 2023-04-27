import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { DataService } from 'src/libs/data.service';



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
  ],
  providers: [
    DataService
  ]
})
export class UsersModule { }
