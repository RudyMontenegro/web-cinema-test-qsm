import { Component, OnInit, OnChanges } from '@angular/core';
import { Movie } from './../../models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  showMovieDetail = false;
  public movieArray: Movie[] = [];

   constructor(
    private movieService: MoviesService
   ){

   }
   createNewMovie(){
    const cMovie : Movie = {
      title: 'Avatar el camino del agua1',
      rating: 5,
      image: 'https://picsum.photos/200/300',
      genre: 'fiction',
      sysnopsis: 'tesdsdfaw dadwdaw',
      date : new Date(2021, 1, 21)
    }
    this.movieService.addMovie(cMovie);
    console.log(this.movieArray);
   }
   ngOnInit(): void {
    this.movieService.getAllMovies()
    .subscribe(data => {
      this.movieArray = data;
      console.log(data);
    })
  }
  onShowDetail(){
    this.showMovieDetail = !this.showMovieDetail;
  }
  
}
