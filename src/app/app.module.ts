import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from "@angular/fire/firestore";

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBtMMSO4gYrrRucD5vqU8OmIqeYOjJx0TY",
    authDomain: "bodaclausanti.firebaseapp.com",
    databaseURL: "https://bodaclausanti.firebaseio.com",
    projectId: "bodaclausanti",
    storageBucket: "bodaclausanti.appspot.com",
    messagingSenderId: "132602810695",
    appId: "1:132602810695:web:e416e12754b49a21bf3c62",
    measurementId: "G-SV936EXZYW"
   }
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [MatSliderModule, MatInputModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
