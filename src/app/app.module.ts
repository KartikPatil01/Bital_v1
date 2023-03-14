import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './login/login.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { FeatureComponent } from './feature/feature.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

// import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ContactComponent,
    ProductComponent,
    LoginComponent,
    AboutComponent,
    CollectionComponent,
    FeatureComponent,
    ContactDetailComponent,
    HeaderComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    // FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule ,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
