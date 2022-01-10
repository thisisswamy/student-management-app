import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { StudentModel } from '../Model/student-model';
import { StudentRegistrationModel } from '../Model/StudentRegistrationModel';
import { ApiService } from '../Rest-Api/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public Users:any[] =[];
  stdModel=new StudentRegistrationModel('','','','','');
  public p = this.stdModel.password;
  constructor( private fb:FormBuilder, private apiService:ApiService) { }

  ngOnInit(): void {
  }
  /* Reactive Forms -->
  regData:any=this.fb.group({
    firstname:['']
  }); */
  onSubmitForm(userData:any){
    console.log(userData);
    this.apiService.createUser(userData)
    
  }
  getUserByEmail(email:String){
    this.apiService.getUserByEmailId(email).subscribe(data=>{
      console.log(data);
      
    },
    err=>{
      console.log(err);
      
    })
  }
  getAllUsers(){
    this.apiService.getUsers().subscribe((data:any) =>{
      for(let a of data){
        this.Users.push(a);
      }
    },
    err=>console.log(err)
    
    )
  }
  deleteUser(email:String){
    this.apiService.deleteUserByEmailId(email);
  }
  

}
