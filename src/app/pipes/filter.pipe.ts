import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any)  {
    if(arg === '' || arg.length < 2 ) return value;
    const resultMovies = [];
    for(const movie of value){
      if(movie.genre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
        resultMovies.push(movie);
      }
    }
    return resultMovies;

  }

}
