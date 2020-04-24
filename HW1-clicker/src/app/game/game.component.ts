import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ResultsService } from '../services/results.service';
import { GameStagesService } from '../services/game-stages.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  name: string;
  counter = 0;
  timer = 1;
  begin: boolean = true;
  play: boolean = false;
  interval;

  constructor(private router: Router,
    private userService: UserService,
    private resultService: ResultsService,
    private gameStages: GameStagesService) { }

  ngOnInit(): void {
    this.name = this.userService.name;
    this.gameStages.getTimer(this.timer)
  }

  getTimeout(event) {
    this.timer = event.target.value;
    console.log(event.target.value);
    this.gameStages.getTimer(this.timer)
  }

  increaseCounter() {
    this.counter++;
  }

  startGame() {
    console.log('game was started');
    this.begin = false;
    this.play = true;
    this.counter = 1;
    this.startTimeout();
  }

  startTimeout() {
    this.interval = setInterval(() => {
      let firstTimer = this.timer
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
        this.router.navigate(['/results'])
        this.resultService.addResult(this.counter)
        this.gameStages.pushUserInfo(this.counter)
      }
    }, 1000)
  }

}
