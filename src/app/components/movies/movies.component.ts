import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { debounceTime, distinct, filter, map, switchMap, tap } from 'rxjs/operators';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = []; //inicializamos donde vamos a almacenar las peliculas
  @ViewChild('movieSearchInput', {static: true}) movieSearchInput!: ElementRef
  movies$!: Observable<Movie[]> //creamos un pipeAsinc para no estar desuscribiendonos.


  constructor(private movieService: MovieService) { }
  //cuando nos subscribimos en el ngOngInit debemos desuscribirnos para eso se utiliza el metodo OnDestroy
  //pero en este caso utilizaremos un pipeAsinc sino la suscripcion seria 
  // .subscribe((movies : Movie[]) =>{  luego obtenemos los datos para que ejecute la peticion HTTP
  //   this.movies = movies !== undefined ? movies : [];
  // })
  ngOnInit(): void { //eschamos cada caracter que el usuario esta escribiendo, luego
    this.movies$ = fromEvent<Event>(this.movieSearchInput.nativeElement, 'keyup').pipe(
      map((event: Event) => {  //mapeamos ese caracter para obtener el termino
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm
      }),
      filter((searchTerm : string) => searchTerm.length > 3), //cuando coloque 3 letras recien comienza a hacer la peticion
      debounceTime(500), // toma el tiempo que le coloque para que recien haga la peticion.
      distinct(),
      switchMap( (searchTerm : string) =>  this.movieService.getMovies(searchTerm)), //cancela la peticion anterior si no termino de ejecutarse 
       
    )
  }
 

  // tap((searchTerm : string) => console.log(searchTerm))



}
