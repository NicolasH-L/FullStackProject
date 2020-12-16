/**
 * @Author Nicolas Hong-Lao
 * matricule: 1460618
 * Github user: NicolasH-L
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { FunComponent } from './application/fun/fun.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { ReadOnlyComponent } from './application/crud/readOnly/read-only/read-only.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    TutorielsComponent,
    FormulaireComponent,
    ReadComponent,
    UpdateComponent,
    FunComponent,
    ContactComponent,
    Error404Component,
    ReadOnlyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
