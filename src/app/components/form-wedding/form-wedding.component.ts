import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CForm } from 'src/app/models/c-form';

@Component({
  selector: 'app-form-wedding',
  templateUrl: './form-wedding.component.html',
  styleUrls: ['./form-wedding.component.scss']

})
export class FormWeddingComponent implements OnInit {
  weddingDataForm: CForm;
  weddingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.weddingDataForm = new CForm();

    this.weddingForm = this.fb.group( {
      name: [this.weddingDataForm.name, Validators.required],
      email: [this.weddingDataForm.email, Validators.required],
      surnames: [this.weddingDataForm.surnames, Validators.required],
      phoneNumber: [this.weddingDataForm.phoneNumber, Validators.required],
      isGoInBus: [this.weddingDataForm.isGoInBus, Validators.required],
      songA: [this.weddingDataForm.songA, Validators.required],
      songB: [this.weddingDataForm.songB, Validators.required],
      songC: [this.weddingDataForm.songC, Validators.required]
    })
  }

  ngOnInit(): void {
;
  }

  onSubmit(data) {
    console.log(data);
  }

}
