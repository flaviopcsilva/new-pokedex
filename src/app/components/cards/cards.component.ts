import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  pokemon: PokemonData


  constructor(
    private service: PokemonService
  ) {

    this.pokemon = {
      id: 0,
      name: "",
      sprites: {
        front_default: ""
      },
      types: []
    }

  }

  ngOnInit(): void {
    this.getPokemon(1)
  }

  getPokemon(searchName: number) {
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }

        },
        error: (err) => console.log(err)


      }
    )

  }

}
