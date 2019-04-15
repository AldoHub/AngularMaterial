import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) {
      return items
    };
  
    //get the text
    if(searchText){
        items = _.filter(items, (item)=>{
           // console.log(item.Tag)
            return item.title.toLowerCase().includes(searchText);
            })
        }
   return items;

  }
}

