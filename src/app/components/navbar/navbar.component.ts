import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  onShow(){
  alert("click")
  console.log('click log')
 }
 constructor(
  private movieService: MoviesService
) {

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
  
 }
}