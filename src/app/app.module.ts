import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";

import { AppComponent } from './app.component';
import { RumorComponent } from './rumor/rumor.component';

const appRoutes: Routes = [
  {
    path: 'rumors',
    component: RumorComponent
  },
  {
    path: '',
    redirectTo: '/rumors',
    pathMatch: 'full'
  }
];

const firebaseConfig = {
  apiKey: "AIzaSyByJ0HdLVBOlC6Y9CQDwNepdEuLfjdd4Bc",
  authDomain: "tittle-tattle-faf84.firebaseapp.com",
  databaseURL: "https://tittle-tattle-faf84.firebaseio.com",
  storageBucket: "tittle-tattle-faf84.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent,
    RumorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
