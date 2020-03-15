import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CForm {

  name: string;
  surnames: string;
  email: string;
  phoneNumber: string;
  isGoInBus: boolean;
  songA: string;
  songB: string;
  songC: string;
  constructor() {
    this.name = '';
    this.surnames = '';
    this.email = '';
    this.phoneNumber = '';
    this.isGoInBus = false;
    this.songA = '';
    this.songB = '';
    this.songC = '';
  }

}
