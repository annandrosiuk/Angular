import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  name = this.getSavedUser();

  addNewName(name: string) {
    this.name = name;
    localStorage.setItem('name', name);
  }

  getSavedUser(): string {
    const name = localStorage.getItem('name');
    return name ? name : '';
  }
}
