import { Injectable } from '@angular/core';
import {IUnit} from '../interfaces/i-unit';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  changeLocations(units: IUnit[]): void {
    units.map(unit=>{






      unit.locations.x += unit.speed;
      unit.locations.y += unit.speed;
    })

  }
  randomXY(){

  }
}

