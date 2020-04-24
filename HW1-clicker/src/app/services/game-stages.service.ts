import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class GameStagesService {
  counter;
  speed;
  timer;
  res = [];
  userInfo = this.getUserInfo();

  public getTimer(timer?) {
    this.timer = timer
    return this.timer
  }

  public pushUserInfo(counts) {
    this.counter = counts;
    this.speed = counts / this.timer

    if (this.res == []) {
      this.res.push(this.counter, this.speed)
    } else {
      this.res.splice(0, 2)
      this.res.push(this.counter, this.speed)
    }
    localStorage.setItem('personalResult', JSON.stringify(this.res));
  }

  public getUserInfo() {
    const userInfo = JSON.parse(localStorage.getItem('personalResult'));
    return userInfo;
  }
}
