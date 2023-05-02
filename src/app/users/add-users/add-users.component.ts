import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      first_name: new FormControl('Ali', [Validators.required, Validators.maxLength(5)]),
      last_name: new FormControl()
    })
  }


  get firstName() {
    return this.userForm.controls['first_name'];
  }


  // saveUser() {
  //   const fNameControl = this.userForm.controls['first_name'];

  //   if (fNameControl.invalid) {
  //     let errorMsg = '';
  //     if (fNameControl.errors?.hasOwnProperty('maxlength')) {
  //       alert(`Length exceeded. Characters entered are: ${fNameControl.errors['maxlength'].actualLength}. Only ${fNameControl.errors['maxlength'].requiredLength} are allowed.`)
  //     }
  //     else {
  //       alert('Field can not be left empty.');
  //     }

  //   }
  //   else {
  //     alert(`Hello ${fNameControl.value}!`);
  //   }
  // }

  saveUser() {
    if(this.userForm.invalid) {
      alert('Form incomplete.');
      return;
    }
    const data = this.userForm.getRawValue();
    console.log(data);
  }

}
