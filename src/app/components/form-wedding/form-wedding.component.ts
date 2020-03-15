import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { CForm } from 'src/app/models/c-form';

@Component({
  selector: 'app-form-wedding',
  templateUrl: './form-wedding.component.html',
  styleUrls: ['./form-wedding.component.scss']

})
export class FormWeddingComponent implements OnInit {
  weddingDataForm: CForm;
  weddingForm: FormGroup;
  form;
  constructor(private fb: FormBuilder, public firestore: AngularFirestore) {
    this.form = this.firestore.collection('form').snapshotChanges();
    this.weddingDataForm = new CForm();

    this.weddingForm = this.fb.group( {
      name: [this.weddingDataForm.name, Validators.required],
      email: [this.weddingDataForm.email, Validators.required],
      surnames: [this.weddingDataForm.surnames, Validators.required],
      phoneNumber: [this.weddingDataForm.phoneNumber, Validators.required],
      isGoInBus: [this.weddingDataForm.isGoInBus, Validators.required],
      directionBus: [this.weddingDataForm.directionBus],
      songA: [this.weddingDataForm.songA],
      songB: [this.weddingDataForm.songB],
      songC: [this.weddingDataForm.songC]
    })
  }

  ngOnInit(): void {

  }

  onSubmit(data) {
    //this.form().snapshotChanges();
    this.firestore.collection('form').add(data).then(data => console.log(`is ok ${data}`)).catch(err => console.log(`is err ${data}`));
  }

}
