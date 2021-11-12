import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string|any;
  email:string|any;
  password1:string|any;
  password2:string|any;
  is_admin:boolean|any;
  is_patient:boolean|any;
  is_health_practitioner:boolean|any;
  user:any;
  constructor(private api:ApiService) {
  
  }
  ngOnInit() {
    this.registerUser();
  }
  registerUser = () =>{
    return this.api.registerUser(this.username,this.email,this.password1,this.password2).subscribe(data => {
      this.user=data;
      console.log(data)
      console.log(this.username)
      console.log(this.email)
      console.log(this.password1)
      console.log(this.password2)
    
    },
    error => {
      console.log(error);
      console.log(this.username)
      console.log(this.email)
      console.log(this.password1)
      console.log(this.password2)
    
    });
  }
}


