import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { MaterialModule,  } from './shared/modules/material-module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HelloComponent } from './components/main/hello.component';
import { MenuModule } from './components/menu/menu.module';

import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SharedDataService } from './services/shared-data.service';
import { CountryService } from './services/country.service';
import { AppConfigService } from './services/app-config.service';
import { AboutSiteComponent } from './components/about-site/about-site.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CountryComponent } from './components/country/country.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';

/*
AppRoutingModule dever o ultimo a ser importado
*/

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MenuModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainComponent,
    HomeComponent,
    HelloComponent,   
    AboutSiteComponent,
    HeaderComponent,
    FooterComponent,
    CountryComponent,
    TemplateFormComponent
  ],
  entryComponents: [

  ],
   providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    SharedDataService,
    CountryService,
    AppConfigService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
