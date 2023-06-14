import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit{
// profileForm!: FormGroup




constructor(private fb: FormBuilder){}


ngOnInit(){
  // this.profileForm = this.fb.group({
  //   firstName: [''],
  //     lastName: [''],
  //     gender: [],
  //     mobile: [],
  //     email: []
  // });
}
}
