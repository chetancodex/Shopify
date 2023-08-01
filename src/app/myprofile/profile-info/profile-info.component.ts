import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Form, FormBuilder, NgForm } from '@angular/forms';

interface userdetails {
  username : string,
  contactNumber : number
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
  const contactNumber =  form.value.contactNumber
  const data = {
    username : username ,
    contactNumber : contactNumber
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
