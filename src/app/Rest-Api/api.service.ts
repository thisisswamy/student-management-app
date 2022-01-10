import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private refreshNeeded$= new Subject<void>();

  getRefresh(){
    return this.refreshNeeded$;
  }

// <--- API Calls of  User- API end points -->
  createUser(user:any){ // Post Call
     this.http.post("http://localhost:8080/user",user).subscribe();
  }
  getUsers(){ //Get Call
    return this.http.get("http://localhost:8080/users");
  }
  
  getUserByEmailId(email:String){ //Get call
    return this.http.get(`http://localhost:8080/users/${email}`);
  }
  deleteUserByEmailId(email:String){ // Delete call
    this.http.delete(`http://localhost:8080/users/${email}`).subscribe();

  }

  // <--- API Calls of Student API --->
  getStudents(){ // Get Call
    return this.http.get("http://localhost:8080/students");
  }
  registerStudent(student:any){ //Post Call
    this.http.post("http://localhost:8080/students",student).subscribe()
  }
  getStudentByDesignation(designation:String){ // Get Call
    return this.http.get(`http://localhost:8080/users/${designation}`)
  }

  deleteStudentByEmailId(email:String){ // Delete Call
    return this.http.delete<any>(`http://localhost:8080/students/${email}`)
    
    //console.log(`http://localhost:8080/students/${email}`);
    
  }

  //<--- Log in validations -->
  sendLogInfo(data:any):any{
    //console.log("calling loginfo");
    return this.http.post("http://localhost:8080/login",data);
  }


// <-- For Is user Authenticated or Not -->
  isLoggedIn():Boolean{
    return !!localStorage.getItem('token');
  }
  isLogOut(){
    localStorage.removeItem('token');
  }
}
function tap(arg0: () => void): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}

