import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})

export class CalculationComponent {

  public calculationForm: FormGroup;
  public API_BASE_URL = environment.API_BASE_URL
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
    console.log(this.API_BASE_URL)
    await fetch(this.API_BASE_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.calculationForm.value)
    }).
      then(response => response.json()).
      then(result => this.totalValue = result)
  }


}



