import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bital_v1';
  // val = true ;
  public isCollapsed = true;
  value : any = true;

  constructor(private dialogref : MatDialog) {}

    
    openLogIn() {
      this.dialogref.open(LoginComponent);
      console.log(this.value);
    }

  
}

