import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HW1-Clicker';
  name = '';
  showVar: boolean = false;

  changeName(newName: string) {
    this.name = newName
  }

  setToggle() {
    this.showVar = !this.showVar;
  }
}
