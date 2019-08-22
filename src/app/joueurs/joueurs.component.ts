import { Component, OnInit } from '@angular/core';
import { Joueur } from '../classes/joueur';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
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
