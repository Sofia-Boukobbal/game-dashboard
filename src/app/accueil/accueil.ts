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

  joueur = {
    nom: 'Sofinotte',
    classe: 'Mage',
    niveau: 42,
    pv: 80,
    pvMax: 100,
    xp: 8750,
    kills: 312,
    rang: 'Or'
  };

  onJoueurModifie(joueurModifie: any) {
    this.joueur = { ...joueurModifie };
  }
}