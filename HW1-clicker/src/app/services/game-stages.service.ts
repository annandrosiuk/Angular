import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class GameStagesService {
  counter;
  speed;
  timer;
  res = [];

  public getTimer(timer?) {
    this.timer = timer
    return this.timer
  }

  public pushUserInfo(counts) {
    this.speed = this.timer / counts
    this.counter = counts;
    this.res.push(this.counter)
    this.res.push(this.speed)
    localStorage.setItem('personalResult', JSON.stringify(this.res));
  }

  public getUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('personalResult'));
    console.log(userInfo)
    return userInfo;
  }
}
