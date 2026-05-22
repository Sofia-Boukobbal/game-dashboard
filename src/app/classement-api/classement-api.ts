import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoueurService } from '../joueur';

@Component({
  selector: 'app-classement-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classement-api.html',
  styleUrl: './classement-api.css'
})
export class ClassementApiComponent implements OnInit {

  joueurs: any[] = [];
  chargement = true;

  constructor(private joueurService: JoueurService) {}

  ngOnInit() {
    this.joueurService.getJoueurs().subscribe({
      next: (data) => {
        this.joueurs = data;
        this.chargement = false;
      },
      error: (err) => {
        console.error('Erreur API :', err);
        this.chargement = false;
      }
    });
  }
}