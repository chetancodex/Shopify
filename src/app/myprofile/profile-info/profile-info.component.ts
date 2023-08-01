import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Form, FormBuilder, NgForm } from '@angular/forms';

interface userdetails {
  username : string,
  contactNumber : number,
  city: string,
  street: string,
  houseNumber : number,
  zipcode: number,
}

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})


export class ProfileInfoComponent implements OnInit{

  constructor(private fb: FormBuilder , private http : HttpClient){
    // let response = this.http.get('http://localhost:3000/userUpdate/userdetails',data)
  }
onSubmit(form : NgForm) {
  const username = form.value.username;
  const contactNumber =  form.value.contactNumber;
  const city = form.value.city;
  const street = form.value.street;
  const houseNumber = form.value.houseNumber;
  const zipcode = form.value.zipcode
  const data = {
    username : username ,
    contactNumber : contactNumber,
    city : city,
    street : street,
    houseNumber: houseNumber,
    zipcode : zipcode
  }
  this.http.post<userdetails>('http://localhost:3000/userUpdate/userdetails',data).subscribe((res)=>{
    console.log(res)
  }, (error)=> {
    console.log("Error" + error )
  })
}







ngOnInit(){

}
}
