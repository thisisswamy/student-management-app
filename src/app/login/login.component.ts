import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../Rest-Api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private router:Router, private apiService:ApiService) { }
  errorMessege:string='';
  checkErrorStatus:Boolean=false;
  ngOnInit(): void {
  }
  loginDetails =this.fb.group({
    username:[''],
    password:['']
  });
  onLogin(credentials:any){
    //console.log(credentials);
  
    // if(credentials.value.username==='admin' && credentials.value.password==='123'){
    //   localStorage.setItem('token','swamy')
    //   this.router.navigate(['/home'])
    // }
    // else{
    //   this.checkErrorStatus=true;
    //   this.errorMessege=' Please enter valid credentials'
    // }
  this.apiService.sendLogInfo(credentials.value).subscribe((res:any)=>{
    console.log("success ",res);
    if(res.messege==='success'){
      localStorage.setItem('token',res.tokenId);
      this.router.navigate(['/home'])
    }
    else{
      this.checkErrorStatus=true;
      this.errorMessege= res.messege;
    }
    
    
  }
  );
    
  }

}
