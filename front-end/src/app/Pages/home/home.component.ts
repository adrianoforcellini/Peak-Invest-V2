import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }
  private readonly HOME_BASE_URL = environment.HOME_BASE_URL

  navigateToList(){
    window.location.href = `${this.HOME_BASE_URL}/userslist`;
  } 

  navigateToCalculation(){
  window.location.href=`${this.HOME_BASE_URL}/calculation`
  }

}
