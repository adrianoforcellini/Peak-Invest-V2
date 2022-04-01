import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  navigateToList(){
    window.location.href = "http://localhost:4200/userslist";
  } 
  
  navigateToCalculation(){
  window.location.href="http://localhost:4200/calculation"
  }

}
