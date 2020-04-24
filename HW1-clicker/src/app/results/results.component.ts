import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ResultsService } from '../services/results.service';
import { GameStagesService } from '../services/game-stages.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  name: string;
  speed: number
  counter: number
  obj
  showResults = false
  totalScore: number

  constructor(private router: Router,
    private userService: UserService,
    private resultsService: ResultsService,
    private gameStagesService: GameStagesService) { }

  ngOnInit(): void {
    this.name = this.userService.name;
    this.speed = this.gameStagesService.getUserInfo()[1]
    this.counter = this.gameStagesService.getUserInfo()[0]
    this.obj = this.resultsService.getScores();

    if (this.speed < 5) {
      this.totalScore = 1
    }

    if (this.speed > 5 && this.speed < 10) {
      this.totalScore = 2
    }

    if (this.speed > 10 && this.speed < 20) {
      this.totalScore = 3
    }

    if (this.speed > 20) {
      this.totalScore = 4
    }
  }

  restart() {
    this.router.navigate(['/'])
  }

}
