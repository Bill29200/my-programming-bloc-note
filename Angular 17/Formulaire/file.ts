import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrl: './login.component.scss'
})
export class loginComponent implements OnInit{


public loginForm! : FormGroup;

//-------------------------------------------------
constructor(private fb : FormBuilder){}
  //-------------------------------------------------
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
    });
  }
  //------------------------------------------------
login() {
 let username = this.loginForm.value.username;
 let password = this.loginForm.value.password;
}
//----------------------------------------------
}
