import { Component , Input , Output , EventEmitter } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms'
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() setVal = new EventEmitter();
  value = true ;

  username : string = "";
  password : string = "";
  name = "kartik";
  pass = "patil";
  myform !: any;

  constructor(private router : Router){}
  ngOnInit(){
    
    
  }

  onSubmit(){
    localStorage.setItem("username",this.username)
    localStorage.setItem("password",this.password);

    
    if (localStorage.getItem("username") === this.name && localStorage.getItem("password") === this.pass ){
      console.log("success");
      this.router.navigate(['/home']);
    } else {
      alert("User Not authorized");
    }
  }

  valToset() {
    this.value = false;
    this.setVal.emit(this.value);
  }

}

