import { Component } from '@angular/core';
import { JoueurCardComponent } from '../joueur-card/joueur-card';
import { HistoriqueComponent } from '../historique/historique';
import { EditJoueurComponent } from '../edit-joueur/edit-joueur';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [JoueurCardComponent, HistoriqueComponent, EditJoueurComponent],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class AccueilComponent {

  onJoueurModifie(joueur: any) {
    console.log('Joueur modifié :', joueur);
  }
}