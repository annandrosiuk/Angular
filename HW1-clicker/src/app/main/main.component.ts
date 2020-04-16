import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  counter: number = 0;
  disabled = false;
  delay: number = 3000;
  speed: number =  this.counter / this.delay;

  @Input() name: string;
  @Input() showMePartially: boolean;

  getTimeout(event){
    this.delay = event.target.value * 1000;
    console.log(`it works, delay is ${this.delay}`)
  }

  increaseCounter() {
    this.counter++;
  }

  timerStart(){
    setTimeout(()=>{
      this.disabled = true;
      this.speed = this.counter / (this.delay / 1000);
      // console.log('timeout');
    }, this.delay);
  }
  
  restartGame(){
    this.counter = 0;
    this.disabled = false;
    console.log('restart');
  }
}
