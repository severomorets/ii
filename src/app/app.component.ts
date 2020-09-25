import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Unit} from './classes/unit';
import {LocationService} from './services/location.service';
import {UnitsService} from './services/units.service';

declare var synaptic: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements AfterViewInit  {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  constructor(private locationService: LocationService, private unitsService: UnitsService) {

  }


  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    console.log('START');
    this.canvas.nativeElement.width = 1000;
    this.canvas.nativeElement.height = 700;
    this.unitsService.createUnit(20,30,null,11,15);
    // this.unitsService.createUnit(10,10,'#328573',11,15);
    setInterval(this.setTimer.bind(this), 100);
 }

  setTimer(): void {
    this.ctx.clearRect(0, 0,  this.canvas.nativeElement.width,  this.canvas.nativeElement.height);
    this.locationService.changeLocations(this.unitsService.units);

    this.drawUnits();

  }
  drawUnits(): void{
    this.unitsService.units.map(unit => {
      this.ctx.fillStyle = 'blue';
      this.ctx.beginPath();
      this.ctx.arc(unit.locations.x, unit.locations.y, unit.size, 0, 2*Math.PI, false);
      this.ctx.fillStyle = unit.color;
      this.ctx.fill();


    });


  }

}
