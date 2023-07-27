import { HttpClient } from "@angular/common/http";
import { Injectable} from "@angular/core";
import { BehaviorSubject, Subject, tap } from "rxjs";
import { User } from "../login/user-model"
import { Router } from "@angular/router";


interface AuthResponseData {
    kind : string,
    idToken:string,
    email:string,
    refreshToken:string,
    expiresIn:string,
    localId:string
  }
  

@Injectable({providedIn:'root'})
export class LoginService {
   private afterLogin = new Subject<boolean>();
    user = new BehaviorSubject<User | null>(null);
     

    constructor(private http: HttpClient , 
                 private router: Router){}
    getLogin(){
        return this.afterLogin.asObservable();
    }
    getLoginSubject(){
        return this.afterLogin
    }
    onLogout(){
        this.user.next(null);
        this.router.navigate(['login']);
        localStorage.removeItem('userData')
    }


    // onAutoLogin(){
    //     const userDataLocalObject = localStorage?.getItem('userData');
    //     console.log('auto login success')
    //     if (!userDataLocalObject) {
    //         // return console.log('autologin');
    //     }else {
    //     const userData: ILoginUserLocalObject = JSON.parse(userDataLocalObject);
    //     console.log('auto login success 2')
    //     const loadedUser = new User(userData.email,userData.id,userData._token,new Date(userData._tokenExpirationDate))
    //     if(loadedUser.token){
    //          this.user.next(loadedUser);
    //          this.router.navigate(['myprofile']);
    //          this.afterLogin.next(true)
    //     }
    // }
      
    // }





}
