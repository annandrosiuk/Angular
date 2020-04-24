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
  speed
  counter
  obj
  showResults = false

  constructor(private router: Router,
    private userService: UserService,
    private resultsService: ResultsService,
    private gameStagesService: GameStagesService) { }

  ngOnInit(): void {
    this.name = this.userService.name;
    this.speed = this.gameStagesService.getUserInfo()[1]
    this.counter = this.gameStagesService.getUserInfo()[0]
    this.obj = this.resultsService.getScores();
  }

  restart(){
    this.router.navigate(['/'])
  }


}
