import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map, take } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./calculation.component.html",
  styleUrls: ["./calculation.component.css"],
})
export class CalculationComponent {
  public calculationForm: FormGroup;
  private readonly API_BASE_URL = environment.API_BASE_URL;
  public totalValue;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.createForm();
  }

  createForm() {
    this.calculationForm = this.fb.group({
      installments: ["", Validators.required],
      value: ["", Validators.required],
    });
  }

  calculationSubmit() {
    this.Post();
  }

  Post() {
    const body = this.calculationForm.value
    this.http.post(this.API_BASE_URL, body).subscribe(result => this.totalValue = result)
  }
}
