import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Rest-Api/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private apiService:ApiService,private router:Router)
  { }

  ngOnInit(): void {
  }
  logOut():void{
    this.apiService.isLogOut();
    this.router.navigate(['/login']);
  }

}
