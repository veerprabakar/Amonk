import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCDhzO94u5BK6Mqh1SLUe6WJTPv6OAcFnY",
  authDomain: "mfire-925e8.firebaseapp.com",
  databaseURL: "https://mfire-925e8.firebaseio.com",
  projectId: "mfire-925e8",
  storageBucket: "",
  messagingSenderId: "208026330901"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
