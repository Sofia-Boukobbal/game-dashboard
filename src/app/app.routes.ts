import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil';
import { ClassementApiComponent } from './classement-api/classement-api';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'classement', component: ClassementApiComponent }
];