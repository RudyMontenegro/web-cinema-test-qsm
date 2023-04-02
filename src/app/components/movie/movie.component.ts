import { Component, Input, OnChanges } from '@angular/core';
import { Movie } from './../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnChanges {
  
  showMovieDetail = false;
  
  @Input() movie: Movie = {
    id: '',
    title: '',
    image: '',
    rating: 0,
    genre: '',
    sysnopsis: '',
    date: new Date(),
  }
  ngOnChanges(){

   
  }

  onShowDetail(){
    this.showMovieDetail = !this.showMovieDetail;
  }
}
