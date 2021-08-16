import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MyserviceService]
})
export class LoginComponent implements OnInit {
  public loginFormGroup!: FormGroup;
  public msg!: string;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private routes: Router,
    private service: MyserviceService) {
    this.loginFormGroup = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }


  //Check Username and Password
  public check(username: string, password: string) {
    if (username == '' && password == '') {
      alert("Username and Password is required");
    }
    else {
      var output = this.service.checkusernameandpassword(username, password);
      if (output == true) {
        this.routes.navigate(['/employee']);
      }
      else {
        this.msg = 'Invalid username or password';
      }
    }
  }
}
