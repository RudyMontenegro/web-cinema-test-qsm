import { Component } from '@angular/core';
import { Movie } from './../../models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: Movie[] = [
    {
      id: '1',
      title: 'Avatar el camino del agua1',
      rating: 5,
      image: './assets/images/avatar.jpg',
      genre: 'fiction',
      sysnopsis: 'tesdsdfaw dadwdaw',
      date : new Date(2021, 1, 21)
    },
    {
      id: '1',
      title: 'Avatar el camino del agua2',
      rating: 5,
      image: './assets/images/avatar.jpg',
      genre: 'fiction',
      sysnopsis: 'tesdsdfaw dadwdaw',
      date : new Date(2021, 1, 21)
    },
    {
      id: '1',
      title: 'Avatar el camino del agua3',
      rating: 5,
      image: './assets/images/avatar.jpg',
      genre: 'fiction',
      sysnopsis: 'tesdsdfaw dadwdaw',
      date : new Date(2021, 1, 21)
    },
    {
      id: '1',
      title: 'Avatar el camino del agua4',
      rating: 5,
      image: './assets/images/avatar.jpg',
      genre: 'fiction',
      sysnopsis: 'tesdsdfaw dadwdaw',
      date : new Date(2021, 1, 21)
    },
    {
      id: '1',
      title: 'Avatar el camino del agua5',
      rating: 5,
      image: './assets/images/avatar.jpg',
      genre: 'fiction',
      sysnopsis: 'tesdsdfaw dadwdaw',
      date : new Date(2021, 1, 21)
    },
   ];
  
}
