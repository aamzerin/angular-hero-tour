import { Injectable } from '@angular/core';

import { Hero } from './model/hero';
import { HEROES } from './utils/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Hero[]{
    return HEROES;
  }

}
