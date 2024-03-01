import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any[] = []; //inicializamos donde vamos a almacenar las peliculas


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  }

  getMovies(searchTerm: string){
    this.movieService.getMovies(searchTerm).subscribe(movies =>{
      console.log(movies);
      this.movies = movies;
    })
    
  }

}
