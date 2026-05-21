import { Component } from '@angular/core';
import { JoueurCardComponent } from './joueur-card/joueur-card';
import { HistoriqueComponent } from './historique/historique';
import { ClassementComponent } from './classement/classement';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JoueurCardComponent, HistoriqueComponent, ClassementComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'game-dashboard';
}