import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyProfileService } from '../profile.api.service';

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
  status = false;
  username!: string | null;
  contactNumber!: number;
  city!: string;
  street!: string;
  houseNumber!: number;
  zipcode!: number;

  constructor(
    private http: HttpClient,
  ) {
  }
 

  onSubmit(form: NgForm) {
    const contactNumber = form.value.contactNumber;
    const city = form.value.city;
    const street = form.value.street;
    const houseNumber = form.value.houseNumber;
    const zipcode = form.value.zipcode;
    const data = {
      contactNumber: contactNumber,
      city: city,
      street: street,
      houseNumber: houseNumber,
      zipcode: zipcode,
    };
    // Request sent
    this.http
      .post<userdetails>('http://localhost:3360/userUpdate/api', data)
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
  ngOnInit () {
      // Fetch user details when the component initializes
      this.http.get<userdetails>('http://localhost:3360/userUpdate/api').subscribe(
        (data) => {
          // Handle the data received from the GET request
          console.log(data);
          this.username = data.username;
          this.contactNumber = data.contactNumber;
          this.city = data.city;
          this.street = data.street;
          this.houseNumber = data.houseNumber;
          this.zipcode = data.zipcode;
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  

}
// http://localhost:3000/userUpdate/userupdate For MongoDb;
// http://localhost:3360/userUpdate/userDetails For Mysql