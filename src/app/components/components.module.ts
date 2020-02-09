import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { FormWeddingComponent } from './form-wedding/form-wedding.component';
import { HeaderComponent } from './header/header.component';
import { PicturesComponent } from './pictures/pictures.component';


@NgModule({
  declarations: [
    FormWeddingComponent,
    HeaderComponent,
    PicturesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    FormWeddingComponent,
    HeaderComponent,
    HeaderComponent,
    PicturesComponent
  ]
})
export class ComponentsModule { }
