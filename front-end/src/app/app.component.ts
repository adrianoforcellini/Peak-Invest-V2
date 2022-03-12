import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public calculationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.calculationForm = this.fb.group({
      installments: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  calculationSubmit() {
    console.log(this.calculationForm.value)
  }

}

    // async getByKey(key) {
    //   await fetch(`https://localhost:7042/weatherforecast/${key}`)
    //     .then(response => response.text())
    //     .then(result => result)
    // }
  // }

