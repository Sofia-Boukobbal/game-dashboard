import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-joueur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-joueur.html',
  styleUrl: './edit-joueur.css'
})
export class EditJoueurComponent {

  @Output() joueurModifie = new EventEmitter<any>();

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

  sauvegarder() {
    this.joueurModifie.emit(this.joueur);
    alert('✅ Stats sauvegardées !');
  }
}