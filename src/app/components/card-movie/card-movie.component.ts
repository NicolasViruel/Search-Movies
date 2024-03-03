import { Component, Input, OnInit } from '@angular/core';
// import { Movie } from 'src/app/interfaces/Movie';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input('movie') movie!: Movie;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.movie);
    
  }

  getImagen() {
    return this.movie.Poster !== 'N/A' ? this.movie.Poster : 'http://via.placeholder.com/600'

    //una forma de mostrar la imagen en blanco en caso de que no tenga poster la pelicula
    // if (this.movie.Poster === 'N/A') {
    //   return 'http://via.placeholder.com/600';
    // } else {
    //   return  this.movie.Poster
    // }
  }



}
