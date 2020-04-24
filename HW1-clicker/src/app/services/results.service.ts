import { Injectable } from '@angular/core';

export interface Result {
  name: string
  counts: number
  date: any
  speed: number
}

@Injectable({ providedIn: 'root' })

export class ResultsService {
  private allResults: Result[];

  constructor() {
    this.allResults = JSON.parse(localStorage.getItem("results")) || [];
  }

  getSavedUser(): string {
    const name = localStorage.getItem('name');
    return name ? name : '';
  }

  addResult(counts: number, speed: number) {
    const result = {
      name: this.getSavedUser(),
      counts: counts,
      date: Date.now(),
      speed: speed
    }
    this.allResults.push(result);
    localStorage.setItem("results", JSON.stringify(this.allResults));
  }

  public getScores(): Result[] {
    return this.allResults.sort((a: Result, b: Result) => b.speed - a.speed);
  }

}
