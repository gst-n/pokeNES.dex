import { Injectable } from '@angular/core';
import { POKEMON } from './app/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(){ }
  
  random = () => {
    const id = Math.round(Math.random() * (POKEMON.length - 1) + 1);
    
    return {
      id: id,
      name: POKEMON[id - 1],
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  }



}
