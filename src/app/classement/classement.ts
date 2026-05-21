import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classement.html',
  styleUrl: './classement.css'
})

//Ajout du classement des différents joueurs.
export class ClassementComponent {
  joueurs = [
    { nom: 'Sofinotte', classe: 'Mage', score: 18850, kills: 378 },
    { nom: 'DragonSlayer', classe: 'Guerrier', score: 15420, kills: 282 },
    { nom: 'ShadowArcher', classe: 'Archer', score: 11200, kills: 245 },
    { nom: 'IronShield', classe: 'Paladin', score: 9800, kills: 198 },
    { nom: 'StormWizard', classe: 'Mage', score: 8650, kills: 187 },
    { nom: 'NightBlade', classe: 'Assassin', score: 7420, kills: 165 }
  ];
}