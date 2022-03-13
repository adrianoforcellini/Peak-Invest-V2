import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public calculationForm: FormGroup;
  baseUrl = "https://localhost:7042";
  public totalValue = 0;

  constructor(private fb: FormBuilder, private http: HttpClient
  ) {
    this.createForm();
  }

  createForm() {
    this.calculationForm = this.fb.group({
      installments: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  calculationSubmit() {
    this.Post();

  }

  async Post() {
    await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.calculationForm.value)
    }).then(response => response.json()).then(result => this.totalValue = result)
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



