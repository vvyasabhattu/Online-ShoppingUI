import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';
import { LoginComponent } from  'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import {AuthGuard} from '../service/auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  { path: 'home', component: HomecomponentComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent },
  
  {path:'about',component:AboutComponent,
  children:[
       {path:'contact' ,component: ContactComponent},
       ]},
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}