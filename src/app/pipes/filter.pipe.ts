import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any)  {
    const resultMovies = [];
    for(const movie of value){
      if(movie.genre.indexOf(arg) > -1 ){
        resultMovies.push(movie);
      }
    }
    return resultMovies;

  }

}
