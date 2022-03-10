import { Component } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';
/* import componennt to use for angualar */


@Component({
  templateUrl: './profile.component.html',/*use profile html */
  styleUrls: ['./profile.component.css'] /* use the css html */

})
export class ProfileComponent {
  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
    available: '',
    price:'',
    email:''
  };
  submitted = false;
  
  /* makes all the variables necessary for course details as well as profile details */
  public pageTitle = 'profile';
  enrolled = ["bio","math"];
  teaches = ["coding","math"];
  edit: boolean = false;
  user_name = 'Anvay Sur';
  identification = 'LHS Student';
  email_value = 'anvaysur@gmail.com';
  course_name = '';
  email_for_course = '';
  availability = '';
  description = '';
  price = '';
  stars = 5;
  imageUrl = "";
  course_making = false;



  constructor(private tutorialService: TutorialService ) {} 
  
  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      available: this.tutorial.available,
      price:this.tutorial.price,
      email:this.tutorial.email

    };
    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    this.course_making = false;
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
      available: '',
      price:'',
      email:''
    };
    this.course_making = !this.course_making
  }


  toggle_edit():void {  /* navigates between the edit form and the profile */
    this.edit = !this.edit
  }
  /*toggle_course():void {  navigates between the coursemaking form and the profile 
    
  }*/
  submit_button(): void { /* gets all of the data from the submit button to edit the user's profile */
    this.user_name = (<HTMLInputElement>document.getElementById("FullName")).value;
    this.identification = (<HTMLInputElement>document.getElementById("identification")).value; 
    this.email_value = (<HTMLInputElement>document.getElementById("email")).value;  
    this.edit = !this.edit;
  }
  submit_button_course(): void { /* gets all of the data from the input buttons to make the course details and goes back to the profile page */
    this.course_name = (<HTMLInputElement>document.getElementById("productName")).value;
    this.email_for_course = (<HTMLInputElement>document.getElementById("productCode")).value; 
    this.availability = (<HTMLInputElement>document.getElementById("releaseDate")).value; 
    this.description = (<HTMLInputElement>document.getElementById("description")).value; 
    this.price = (<HTMLInputElement>document.getElementById("price")).value; 
    
    
    
    
    
  }
}

