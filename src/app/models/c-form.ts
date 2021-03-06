import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CForm {
  id: string;
  name: string;
  surnames: string;
  email: string;
  phoneNumber: string;
  isGoInBus: boolean;
  directionBus: string;
  songA: string;
  songB: string;
  songC: string;
  constructor() {
    this.id = '';
    this.name = '';
    this.surnames = '';
    this.email = '';
    this.phoneNumber = '';
    this.isGoInBus = false;
    this.directionBus = '';
    this.songA = '';
    this.songB = '';
    this.songC = '';
  }

}
