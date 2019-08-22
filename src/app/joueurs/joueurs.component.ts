import { Component, OnInit } from '@angular/core';
import { Joueur } from '../classes/joueur';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {
  joueur: Joueur = {
    id: 1,
    name: 'Brocel',
    email: 'geenens.prof@gmail.com',
    pword: 'C1secret'
  };

  constructor() { }

  ngOnInit() {
  }

}
