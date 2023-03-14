import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Bital_v1';
  // val = true ;
  public isCollapsed = true;
  value : any = true;

  username = localStorage.getItem("username");
  constructor(private dialogref : MatDialog) {}

    
    openProfile() {
      this.dialogref.open(ProfileComponent);
      console.log(this.value);
    }

  
}

