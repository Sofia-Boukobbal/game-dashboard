import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joueur-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joueur-card.html',
  styleUrl: './joueur-card.css'
})

// Ajout des données du joueur.
export class JoueurCardComponent {
  joueur = {
    nom: 'Sofinotte',
    classe: 'Mage',
    niveau: 42,
    pv: 80,
    pvMax: 100, //pv maximum du joueur.
    xp: 8750,
    kills: 312,
    rang: 'Or'
  };

  //Cette methode retire 10 pv au joueur.
  recevoirDegats() {
    if (this.joueur.pv > 0) {
      this.joueur.pv -= 10;
      if (this.joueur.pv < 0) this.joueur.pv = 0;
    }
  }

  //Cette méthode ajoute 20 pv au joueur.
  soigner() {
    if (this.joueur.pv < this.joueur.pvMax) {
      this.joueur.pv += 20;
      if (this.joueur.pv > this.joueur.pvMax) this.joueur.pv = this.joueur.pvMax;
    }
  }

  //On ajoute ici l'état du joueur en fonction de son nombre de pv restants.
  getEtat() {
    const pourcentage = (this.joueur.pv / this.joueur.pvMax) * 100;
    if (pourcentage <= 0) return 'etat-mort';
    if (pourcentage <= 30) return 'etat-danger';
    if (pourcentage <= 60) return 'etat-blesse';
    return 'etat-bon';
  }

  // On ajoute un petit commentaire a chaquer changement d'état du joueur.
  getMessageEtat() {
    const pourcentage = (this.joueur.pv / this.joueur.pvMax) * 100;
    if (pourcentage <= 0) return '💀  KO !';
    if (pourcentage <= 30) return '🚨 En danger !';
    if (pourcentage <= 60) return '🤕 Blessé...';
    return '💪 En pleine forme !';
  }
}