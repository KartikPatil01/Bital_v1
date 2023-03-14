import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroComponent } from './pages/hero/hero.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home' , component:HeroComponent},
  {path:'products', component:ProductComponent},
  {path:'contact' , component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
