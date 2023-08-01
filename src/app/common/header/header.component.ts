import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

accessprofile : boolean = false



  constructor(private router: Router,
              private loginService: LoginService,
              private route:ActivatedRoute,
             ){
    
  }
goToLogin() {
this.router.navigate(["login"])
}
goToCart(){
  this.router.navigate(['myprofile/shopping-cart'])
}


profileaccess(event: any){
this.accessprofile = true
}
ngOnInit(){
  this.loginService.getLogin().subscribe((data)=>{
    this.accessprofile = data
  }) 
 
}
}
