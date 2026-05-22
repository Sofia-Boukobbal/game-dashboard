import { Component } from '@angular/core';
import { JoueurCardComponent } from '../joueur-card/joueur-card';
import { HistoriqueComponent } from '../historique/historique';
import { ClassementComponent } from '../classement/classement';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [JoueurCardComponent, HistoriqueComponent, ClassementComponent],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class AccueilComponent {}