import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { FormWeddingComponent } from './form-wedding/form-wedding.component';
import { HeaderComponent } from './header/header.component';
import { PicturesComponent } from './pictures/pictures.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { ChuchInfoComponent } from './chuch-info/chuch-info.component';
import { InfoPartyComponent } from './info-party/info-party.component';


@NgModule({
  declarations: [
    FormWeddingComponent,
    HeaderComponent,
    PicturesComponent,
    GeneralInfoComponent,
    ChuchInfoComponent,
    InfoPartyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    FormWeddingComponent,
    HeaderComponent,
    HeaderComponent,
    PicturesComponent,
    GeneralInfoComponent,
    ChuchInfoComponent,
    InfoPartyComponent
  ]
})
export class ComponentsModule { }
