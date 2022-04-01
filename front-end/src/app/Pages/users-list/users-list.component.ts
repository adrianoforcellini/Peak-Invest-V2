import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})

export class UsersListComponent {

  private readonly API_BASE_URL = environment.API_BASE_URL
  public usersListForm: FormGroup;
  public users ;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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

  getByKey(key) {
    this.http.get<[]>(`${this.API_BASE_URL}/${key}`).subscribe((user) => this.users = [user])

  }

   getAll() {
    this.http.get<[]>(this.API_BASE_URL).subscribe((users) => this.users = users)
  }
}
