import { Component } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Pokemon } from 'src/app/types';
@Component({
  selector: 'app-inicio-app',
  templateUrl: './inicio-app.component.html',
  styleUrls: ['./inicio-app.component.css']
})
export class InicioAppComponent {

  constructor(public pokeService:ApiService) { 
    this.pokemonRandom();
    
  }

  pokemon:any = "";
  id = ""
  name = ""
  imagen = ""

  pokemonRandom() {
    this.pokemon = this.pokeService.random();
    this.id = this.pokemon.id
    this.name = this.pokemon.name
    this.imagen = this.pokemon.image

    this.showFail = false;
    this.verSilueta = true
  }

  showFail = false;
  
  verSilueta = true;
  adivinar(PokeNombre:string){

    if ( !(PokeNombre === this.pokemon.name) ){
      this.showFail = true;
      PokeNombre="";
      this.verSilueta = false
    }
    else {
      this.showFail=false;
      PokeNombre="";
      this.verSilueta = false
    }

    
  }

}