import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joueur-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joueur-card.html',
  styleUrl: './joueur-card.css'
})
export class JoueurCardComponent {

  @Input() joueur: any = {
    nom: 'Sofinotte',
    classe: 'Mage',
    niveau: 42,
    pv: 50,
    pvMax: 100,
    xp: 8750,
    kills: 312,
    rang: 'Or'
  };

  recevoirDegats() {
    if (this.joueur.pv > 0) {
      this.joueur.pv -= 20;
      if (this.joueur.pv < 0) this.joueur.pv = 0;
    }
  }

  soigner() {
    if (this.joueur.pv < this.joueur.pvMax) {
      this.joueur.pv += 20;
      if (this.joueur.pv > this.joueur.pvMax) this.joueur.pv = this.joueur.pvMax;
    }
  }

  getEtat() {
    const pourcentage = (this.joueur.pv / this.joueur.pvMax) * 100;
    if (pourcentage <= 0) return 'etat-mort';
    if (pourcentage <= 30) return 'etat-danger';
    if (pourcentage <= 60) return 'etat-blesse';
    return 'etat-bon';
  }

  getMessageEtat() {
    const pourcentage = (this.joueur.pv / this.joueur.pvMax) * 100;
    if (pourcentage <= 0) return '💀 Personnage KO !';
    if (pourcentage <= 30) return '🚨 En danger !';
    if (pourcentage <= 60) return '🤕 Blessé...';
    return '💪 En pleine forme !';
  }

  getAvatar() {
  switch (this.joueur.classe) {
    case 'Guerrier': return '⚔️';
    case 'Mage': return '🧙';
    case 'Archer': return '🏹';
    case 'Paladin': return '🛡️';
    case 'Assassin': return '🗡️';
    default: return '🎮';
  }
}
}