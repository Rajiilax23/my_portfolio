import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProfileModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
     
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
