import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Date
import {
  MatNativeDateModule,
  MatDateFormats,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    },
  },
  display: {
    dateInput: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'short',
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short',
    },
  },
};

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatNativeDateModule
  ],
  providers: [
    {provide:MAT_DATE_LOCALE, useValue:'it-IT'},
    {provide:MAT_DATE_FORMATS,useValue:APP_DATE_FORMATS}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
