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
  timer = 5;
  begin: boolean = true;
  play: boolean = false;
  interval;
  speed

  constructor(private router: Router,
    private userService: UserService,
    private resultService: ResultsService,
    private gameStagesService: GameStagesService) { }

  ngOnInit(): void {
    this.name = this.userService.name;
    this.gameStagesService.getTimer(this.timer)
  }

  getTimeout(event) {
    this.timer = event.target.value;
    this.gameStagesService.getTimer(this.timer)
  }

  increaseCounter() {
    this.counter++;
  }

  startGame() {
    this.begin = false;
    this.play = true;
    this.counter = 1;
    this.startTimeout();
  }

  startTimeout() {
    let firstTimer = this.timer
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        clearInterval(this.interval);
        this.speed = this.counter / firstTimer
        this.router.navigate(['/results'])
        this.resultService.addResult(this.counter, this.speed)
        this.gameStagesService.pushUserInfo(this.counter)
      }
    }, 1000)
  }

}
