
import { Component, OnInit, OnChanges } from '@angular/core';
import { Movie } from './../../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit  {
  showMovieDetail = false;
  public movieArray: Movie[] = [];
  constructor(
    private movieService: MoviesService
   ){

   }
   ngOnInit(): void {
    this.movieService.getAllMovies()
    .subscribe(data => {
      this.movieArray = data;
      console.log(data);
    })
  }
  
}
