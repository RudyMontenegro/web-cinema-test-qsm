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
  images: string[];
  urlImg = '';
  imgRefGlo : any;

  onShow(){
  alert("click")
  console.log('click log')
 }
 constructor(
  private movieService: MoviesService,
  private storage: Storage
) {
  this.images = [];
}
ngOnInit() {
  this.getImages();
}
  onSubmit(data: Movie){
    data.date = new Date(data.date)
    data.image = this.images[0];
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

 uploadImage($event: any) {
  const file = $event.target.files[0];
  console.log(file);

  const imgRef = ref(this.storage, `images/${file.name}`);

  this.imgRefGlo = imgRef;

  uploadBytes(imgRef, file)
    .then(response => {
      console.log(response)
      this.getImages();
    })
    .catch(error => console.log(error));

}
async getImages() {
  this.images = [];
const imagesRef =  this.imgRefGlo;
const url = await getDownloadURL(imagesRef);
this.images.push(url);
  /*
  const imagesRef = ref(this.storage, 'images');
  listAll(imagesRef)
    .then(async response => {
      console.log(response);
      this.images = [];
      for (let item of response.items) {
        const url = await getDownloadURL(item);
        this.images.push(url);
      }
    })
    .catch(error => console.log(error));*/
}

}

