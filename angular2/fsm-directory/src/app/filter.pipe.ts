import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(stocks: any, term: any): any {
    //check if search term is undefined

    if (term === undefined) return stocks;

    return stocks.filter(function(stocks){
      return stocks.name.toLowerCase().includes(term.toLowerCase());
    })
  }
}
