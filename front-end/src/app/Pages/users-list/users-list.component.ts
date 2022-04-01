import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent {

  private API_BASE_URL = environment.API_BASE_URL
  public usersListForm: FormGroup;
  public users = [
    [
      {
        "key": 1,
        "value": "AdrianWarrior"
      },
      {
        "key": 2,
        "value": "AnaShine"
      },
      {
        "key": 3,
        "value": "ArnaMaster"
      }
    ]
  ]
    ;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.usersListForm = this.fb.group({
      usersListValue: ['', Validators.required]
    });
  }

  submitForm() {
    const keyNumber = this.usersListForm.value.usersListValue;
    if (keyNumber < 0 || keyNumber > 3 || keyNumber % 1 !== 0) {
      alert('Escolha um número inteiro entre 0 e 3');
      return;
    }
    if (keyNumber === 0) {
      return this.getAll();
    }
    return this.getByKey(keyNumber)
  }

  async getByKey(key) {
    await fetch(`${this.API_BASE_URL}/${key}`)
      .then(response => response.text())
      .then(result => this.users = [JSON.parse(result)])
  }
  async getAll() {
    await fetch(this.API_BASE_URL)
      .then(response => response.text())
      .then(result => this.users = JSON.parse(result))
    console.log(this.users);
  }
}
