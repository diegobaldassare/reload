import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.init();
  }


  init(): void {
    const canvas = <HTMLCanvasElement> document.getElementById('e');
    const context = canvas.getContext('2d');
    const plane = new Image();
    plane.src = '../../assets/plano.png';
    plane.onload = function() {
      context.drawImage(plane, 0, 0, 750, 900);
    };
  }

  draw(): void {
    const canvas = <HTMLCanvasElement> document.getElementById('e');
    const context = canvas.getContext('2d');
    const posX = (<HTMLInputElement>document.getElementById('x')).value;
    const posY = (<HTMLInputElement>document.getElementById('y')).value;
    const rotate = (<HTMLInputElement>document.getElementById('rot')).value;

    const img = document.querySelector('img');
    img.style.setProperty('--element-top', posX + 'px');
    img.style.setProperty('--element-left', posY + 'px');
    img.style.setProperty('--element-rotate', rotate + 'deg');
    img.style.visibility = 'visible';
  }
}
