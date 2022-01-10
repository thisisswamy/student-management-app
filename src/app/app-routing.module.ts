import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './authentication/auth.guard';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:'full'},
  {path:'create',component:CreateComponent},
  {
    path:'home',component:HomeComponent,
   canActivate:[AuthGuard]
  },

  {
    path:'reg',component:RegComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'about',component:AboutComponent,
    canActivate:[AuthGuard]
  },
 
  {
    path:'login',component:LoginComponent
  },
  
  {path:'page-not-found',component:PageNotFoundComponent},
  {path:'**', redirectTo:'page-not-found',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
