import { Pipe, PipeTransform } from '@angular/core';

import { Score } from "./score";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(scores: Score[], search: string): Score[] {
    if(!scores) {return undefined};
	if(!search) {return scores};

	search = search.toLowerCase();
	return scores.filter((score) => score.name.toLowerCase().indexOf(search) >= 0 || score.score.toString().indexOf(search) >= 0 || score.percentage.toString().indexOf(search) >= 0 || score.percentage.toString().concat("%").indexOf(search) >= 0)
  }

}
