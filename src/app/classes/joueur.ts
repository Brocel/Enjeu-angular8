import { Personnage } from 'personnage';
export class Joueur {
  id: number;
  email: email;
  name: string;
  pword: string;
  personnage: Personnage = {
    id: 1,
    name: 'Maya-Rha',
    imgUrl: '../../assets/img/icons/humFem.jpg',
    sexe: 'Femme',
    race: 'Humain',
    metier: 'Sage',
    specialite: 'Spiritualité',
    caractère: 'Aléatoire',
    taille: 167,
    masse: 55,
    age: 35,
    description: 'To do',
    inventaire: 'To do',
    force: 10,
    defense: 10,
    intelligence: 10
  };
}
