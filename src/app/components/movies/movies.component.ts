import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []; //inicializamos donde vamos a almacenar las peliculas
  @ViewChild('movieSearchInput') movieSearchInput!: ElementRef

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(
    
    ).subscribe
  }

  getMovies(event: Event){
    const searchTerm = (event.target as HTMLInputElement).value;
    console.log(searchTerm);
    this.movieService.getMovies(searchTerm).subscribe(movies =>{
      console.log(movies);
      this.movies = movies !== undefined ? movies : [];
    })
    
  }

}
