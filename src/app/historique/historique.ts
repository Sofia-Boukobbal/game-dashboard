import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historique.html',
  styleUrl: './historique.css'
})

// Création des anciens combats.
export class HistoriqueComponent {
  parties = [
    {
      map: 'Forêt Maudite',
      date: '20/05/2026',
      kills: 12,
      morts: 2,
      duree: '34 min',
      victoire: true
    },
    {
      map: 'Château du Dragon Voyce',
      date: '19/05/2026',
      kills: 5,
      morts: 4,
      duree: '52 min',
      victoire: false
    },
    {
      map: 'Désert Enflammé',
      date: '18/05/2026',
      kills: 18,
      morts: 1,
      duree: '28 min',
      victoire: true
    },
    {
      map: 'Tour de Glace',
      date: '17/05/2026',
      kills: 7,
      morts: 6,
      duree: '45 min',
      victoire: false
    }
  ];
}