import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html'
})
export class CalculatorComponent {

  form = this.fb.group({
    factor: [0, [Validators.required]]
  });

  result: number = 0;

  constructor(private fb: FormBuilder) { }

  add() {
    this.result = Number(this.form.get('factor')?.value) + this.result;
  }

  sub() {
    this.result = this.result - Number(this.form.get('factor')?.value);
  }

  multi() {
    this.result = this.result * Number(this.form.get('factor')?.value);
  }

  div() {
    this.result = this.result / Number(this.form.get('factor')?.value);
  }

  reset() {
    this.result = 0;
    this.form.patchValue({
      factor: 0
    });
  }

}
