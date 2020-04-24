import { Injectable } from '@angular/core';

export interface Result {
  name: string
  counts: number
  date: any
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

  addResult(counts: number) {
    const result = {
      name: this.getSavedUser(),
      counts: counts,
      date: Date.now()
    }
    this.allResults.push(result);
    localStorage.setItem("results", JSON.stringify(this.allResults));
  }

  public getScores(): Result[] {
    return this.allResults.sort((a: Result, b: Result) => b.counts - a.counts);
  }

}
