import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, NgForm } from '@angular/forms';
import { UserApiService } from '../api.service.user';
import { MyProfileComponent } from '../myprofile.component';

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
export class ProfileInfoComponent implements OnInit {
  detailsubmit = false;
  username!: string;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private profile: MyProfileComponent
  ) {
    this.profile.getNameUpdates().subscribe((data) => {
      this.username = data;
    });
  }

  onSubmit(form: NgForm) {
    console.log('yeah')
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
    this.http
      .post<userdetails>('http://localhost:3000/userUpdate/userupdate', data)
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

  ngOnInit() {}
}
