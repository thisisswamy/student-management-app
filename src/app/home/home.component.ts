import { ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Rest-Api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public showHomePage:Boolean=true;
 public students:any[]=[]
  constructor( private activeRoute:ActivatedRoute, private router:Router,private apiService:ApiService, private cdr:ChangeDetectorRef) { }
  ngOnInit():void{
    //this.router.url === '/login'
    //console.log( "to get current route/path/url: ",window.location.pathname);
    this.getAllStudents();
    
  }
  getAllStudents(){
    this.apiService.getStudents().subscribe((data:any)=>{
      //console.log('get students from api : ', data);
      this.students=data   
      // for(let a of data){
      //   this.students.push(a);
      // }
    },err=>console.log(err)
    
    );
    //console.log('local list ',this.students);
    
  }
  deleteStudentByEmail(email:String){
    console.log(email);
    this.apiService.deleteStudentByEmailId(email).subscribe(
      data=>{
        this.ngOnInit();
      }
    );
    

   }

   

  }
