import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';

import {appRoutes} from './app.routes';
  

@NgModule({
    declarations:[
        AppComponent,
        AboutMeComponent
    ],
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers:[],
    bootstrap:[AppComponent]

})
export class AppModule{}