import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';


export const appRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'about', component: AboutMeComponent }
  
];
