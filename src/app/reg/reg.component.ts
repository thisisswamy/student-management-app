import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../Rest-Api/api.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  public student:any;
  public students:any[]=[]
  constructor(private formBuilder:FormBuilder,private apiService:ApiService) { }

  ngOnInit(): void {
  }
  
  registerHere(studentData:any){
    console.log(studentData);
    this.apiService.registerStudent(studentData);
    
  }
  getStudentByDesignation(designation:String){
    this.apiService.getStudentByDesignation(designation).subscribe(data=>{
      console.log('get api call :', data);
      this.student=data;
      
    })
  }
  
  

}
