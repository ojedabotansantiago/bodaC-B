import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CForm } from 'src/app/models/c-form';

@Component({
  selector: 'app-form-wedding',
  templateUrl: './form-wedding.component.html',
  styleUrls: ['./form-wedding.component.scss']

})
export class FormWeddingComponent implements OnInit {
  weddingDataForm: CForm;
  weddingForm: FormGroup;

  constructor( private fb?: FormBuilder) { }

  ngOnInit(): void {
    this.weddingDataForm = new CForm();

    this.weddingForm = this.fb.group( {
      name: [this.weddingDataForm.name, Validators.required],
      email: [this.weddingDataForm.email, Validators.required],
      surnames: [this.weddingDataForm.surnames, Validators.required],
      phoneNumber: [this.weddingDataForm.phoneNumber, Validators.required],
      isGoInBus: [this.weddingDataForm.isGoInBus, Validators.required]
    });
  }

  onSubmit(data) {
    console.log(data);
  }

}
