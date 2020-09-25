import { Injectable } from '@angular/core';
import {Unit} from '../classes/unit';
import {IUnit} from '../interfaces/i-unit';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  units: IUnit[] = [];
  constructor() { }
  createUnit(
    x = 0,
    y = 0,
    color = '#8c3232',
    speed = 3,
    size = 20,
    health = 100
  ): void{
    this.units.push({
      color, locations: {x, y}, speed, size, health
    } as IUnit);
  }
}
