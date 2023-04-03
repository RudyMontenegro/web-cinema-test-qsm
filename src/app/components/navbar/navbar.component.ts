import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { finalize } from 'rxjs';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  showCreateMovie = false;

  onShow(){
  alert("click")
  console.log('click log')
 }
 constructor(
  private movieService: MoviesService,
  private storage: Storage
) {
}
  onSubmit(data: Movie){
    data.date = new Date(data.date)
    this.movieService.addMovie(data);
    console.warn(data)
  }

onShowCreateMovie(){
  this.showCreateMovie = !this.showCreateMovie
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
 }

  uploadImage($event: any){
  const file = $event.target.files[0];
  console.log(file);
  const imgRef = ref(this.storage, `images/${file.name}`);
  uploadBytes(imgRef,file)
    .then(response => console.log(response)
      
    )
    .catch(error => console.log(error))
    .finally( () =>
      getDownloadURL(imgRef)
    )
}
}

