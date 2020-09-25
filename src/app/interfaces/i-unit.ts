export interface IUnit {
  color: string;
  size: number;
  locations: Ilocation;
  speed: number;
  health: number;
}

interface Ilocation {
  x: 0;
  y: 0;
}
