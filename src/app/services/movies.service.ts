import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private firestone: Firestore) { }

  addMovie(movie: Movie){
    const moveRef = collection(this.firestone, 'movies');
    return addDoc(moveRef, movie);
  }
}
