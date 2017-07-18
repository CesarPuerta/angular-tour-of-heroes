import { HEROES } from './mock-heroes';
import { Hero } from './hero/hero.component';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  constructor() { }

}
