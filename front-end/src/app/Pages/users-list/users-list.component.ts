import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent implements OnInit {

  private baseUrl = environment.baseUrl

  constructor() { }

  ngOnInit() {
  }

  async getByKey(key) {
    await fetch(`${this.baseUrl}/${key}`)
      .then(response => response.text())
      .then(result => console.log(result))
  }

  async getAll() {
    await fetch(`${this.baseUrl}`)
      .then(response => response.text())
      .then(result => console.log(result))
  }
}
