import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PetIndexComponent } from './pet-index/pet-index.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from "./header/header.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {OwnerDetailsComponent} from "./owner-details/owner-details.component";
import {MatTable} from "@angular/material/table";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PetIndexComponent,
    PetDetailsComponent,
    HeaderComponent,
    OwnerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconButton,
    MatButtonModule,
    MatIconModule,
    MatTable
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
