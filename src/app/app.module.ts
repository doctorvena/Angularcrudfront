import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { WishListComponent } from '../app/wish-list/wish-list.component';
import { EditComponent } from '../app/wish-list/edit/edit.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { AddComponent } from './wish-list/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    InfoComponent,
    WishListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'wishList', component: WishListComponent},
      {path: 'info', component: InfoComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
