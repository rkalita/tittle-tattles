import { Injectable } from '@angular/core';
import { Rumor } from './rumor';
import { RUMORS } from './mock-rumors';

@Injectable()
export class RumorService {

  list(): Rumor[] {
    return RUMORS;
  }

}
