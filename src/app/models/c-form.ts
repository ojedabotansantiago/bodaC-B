import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CForm {

  name: string;
  surnames: string;
  email: string;
  phoneNumber: string;
  isGoInBus: boolean;
  constructor() {
    this.name = '';
    this.surnames = '';
    this.email = '';
    this.phoneNumber = '';
    this.isGoInBus = false;
  }

}
