import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private firestone: Firestore) { }

  addMovie(movie: Movie){
    const moveRef = collection(this.firestone, 'movies');
    return addDoc(moveRef, movie);
  }
  getAllMovies(): Observable<Movie[]>{
    const moveRef = collection(this.firestone, 'movies');
    return collectionData(moveRef, {idField: 'id'}) as Observable<Movie[]>;
  }
}
