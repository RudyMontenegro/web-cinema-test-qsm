import { Component, Input } from '@angular/core';
import { Movie } from './../../models/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input('movieCH')
   movie: Movie = {
    id: '',
    title: '',
    image: '',
    rating: 0,
    genre: '',
    sysnopsis: '',
    date: new Date(),
  }
}
