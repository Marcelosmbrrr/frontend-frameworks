import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface IItem {
  name: string,
  email: string
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent {

  items: IItem[] = [];

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) { }

  addItem() {
    if (!this.form.valid) {
      return;
    }

    const item = {
      name: this.form.get('name')?.value,
      email: this.form.get('email')?.value
    }

    const clone = JSON.parse(JSON.stringify(this.items));
    clone.push(item);

    this.items = clone;
  }

  removeItem(index: number) {
    const clone = JSON.parse(JSON.stringify(this.items));
    clone.splice(index, 1);
    this.items = clone;
  }

  resetList() {
    this.items = [];
  }

  existsItems() {
    return this.items.length > 0;
  }

  getTotalItems() {
    return this.items.length;
  }

}
