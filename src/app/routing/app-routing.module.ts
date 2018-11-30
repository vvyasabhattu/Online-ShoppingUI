import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';
import { LoginComponent } from  'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { PagenotfoundComponent } from 'src/app/pagenotfound/pagenotfound.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import {AuthGuard} from '../service/auth.guard';
import {MyaccountComponent} from '../myaccount/myaccount.component';
import {AccounteditComponent } from '../accountedit/accountedit.component';
import {ViewaccountComponent} from '../viewaccount/viewaccount.component';
import { CartComponent } from '../cart/cart.component';
import{AddressbookComponent} from '../addressbook/addressbook.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomecomponentComponent },
  { path: 'cart', component: CartComponent ,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent  },
  { path: 'register', component: RegisterComponent },
  {path :'viewAccount',component : AccounteditComponent},
  {path :'editAccount',component : ViewaccountComponent},
  {path:'about',component:AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'addressBook', component: AddressbookComponent},
  { path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
