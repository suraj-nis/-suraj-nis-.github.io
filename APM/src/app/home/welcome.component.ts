import { Component } from '@angular/core';



@Component({
  templateUrl: './welcome.component.html', /* we use this html template that we made in the same folder */
  styleUrls: ['./welcome.component.css'] /* we use this css template that we made in the same folder */

})
export class WelcomeComponent {
  /* Here we make the variables needed for navigation throughout the home page */
  public pageTitle = 'Welcome';
  signup: boolean = false;
  login: boolean = false;
  login_success: boolean = false;
  home: boolean = true;
  email_value:string='null';
  password_value:string='null';
  password_check:string='null';
 /* config = {
    host: 'localhost',
    user:'root',
    password:'Beastboy$196',
    database:'calligo'
  }
  mysql = require('mysql');
  connection = this.mysql.createConnection(this.config); */

  
 

  home_login_signup(): void {  /* sends the user to the signup page and closes the homepage */
    this.signup = true
    this.home = false
  }
 
  signupcancel(): void {  /* sends the user back to the home page when the cancel button is hit */
    this.signup = !this.signup
    this.home = !this.home
    
  }
  signupconfirm() {
    this.email_value  = (<HTMLInputElement>document.getElementById("email")).value;  /* This code gets the value of the inpu*/
    this.password_value  = (<HTMLInputElement>document.getElementById("psw")).value; 
    this.password_check  = (<HTMLInputElement>document.getElementById("psw-repeat")).value; 
   
   
   /* let stmt = 'insert into c_user(username, password, firstname, lastname, email) VALUES(?,?,?,?,?)';
    let userrec=[this.email_value,this.password_value, 'hehe','jk','lksdjl@gmail.com']
    this.connection.query(stmt, userrec, (err: any, results: any, fields: any) => {
      if (err){
        return console.error(err.message)
      }
      console.log('Rec ID'+results.insertId);
    });*/


    console.log(this.email_value)
    console.log(this.password_value)
    console.log(this.password_check)

  }
  logincancel(): void {         /* sends the user back to the home page when the cancel button is hit */
    this.login = !this.login
    this.home = !this.home
  }
  login_fromsignup(): void { /* This sends the user from the signup page to the login page */
    this.login = !this.login
    this.signup = !this.signup

  }


}
