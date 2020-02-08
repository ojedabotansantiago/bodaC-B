import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormWeddingComponent } from './form-wedding/form-wedding.component';
import { HeaderComponent } from './header/header.component';
import { PicturesComponent } from './pictures/pictures.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormWeddingComponent,
    HeaderComponent,
    PicturesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormWeddingComponent,
    HeaderComponent,
    HeaderComponent,
    PicturesComponent
  ]
})
export class ComponentsModule { }
