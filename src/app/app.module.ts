
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './components/material/material.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GameCreateComponent } from './pages/game-create/game-create.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GameCreateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ComponentsModule, 
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
