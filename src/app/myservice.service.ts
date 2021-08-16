import { Injectable } from '@angular/core';

@Injectable()
export class MyserviceService {

  constructor() { }

  //Provide static username and password
  public checkusernameandpassword(uname: string, pwd: string) {
    if (uname == "admin" && pwd == "admin") {
      localStorage.setItem('username', "admin");
      return true;
    }
    else {
      return false;
    }
  }
}
