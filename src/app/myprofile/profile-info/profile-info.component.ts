import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MyProfileComponent } from '../myprofile.component';
import { MyProfileService } from '../profileapiservice';

interface userdetails {
  username: string;
  contactNumber: number;
  city: string;
  street: string;
  houseNumber: number;
  zipcode: number;
}

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
})
export class ProfileInfoComponent {
  detailsubmit = false;
  status = false;
  username!: string | null;
  contactNumber!: number;
  city!: string;
  street!: string;
  houseNumber!: number;
  zipcode!: number;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private profileService : MyProfileService
  ) {
      this.profileService.username$.subscribe((res)=> {
        this.username = res
      })
  }

  onSubmit(form: NgForm) {
    const username = this.username;
    const contactNumber = form.value.contactNumber;
    const city = form.value.city;
    const street = form.value.street;
    const houseNumber = form.value.houseNumber;
    const zipcode = form.value.zipcode;
    const data = {
      username: username,
      contactNumber: contactNumber,
      city: city,
      street: street,
      houseNumber: houseNumber,
      zipcode: zipcode,
    };
    // Request sent
    this.http
      .post<userdetails>('http://localhost:3360/userUpdate/userDetails', data)
      .subscribe(
        (res) => {
          console.log(res);
          this.detailsubmit = true;
        },
        (error) => {
          console.log('Error' + error);
        }
      );
  }

  viewStatus() {
    this.detailsubmit = false;
    this.status = true;
  }

  dismiss() {
    this.detailsubmit = false;  
  }
}
// http://localhost:3000/userUpdate/userupdate For MongoDb;
// http://localhost:3360/userUpdate/userDetails For Mysql