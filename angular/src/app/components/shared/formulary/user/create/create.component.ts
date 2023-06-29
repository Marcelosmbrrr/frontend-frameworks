import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  open: boolean = false;

  handleOpen() {
    this.open = true;
  }

  handleClose() {
    this.open = false;
  }

}
