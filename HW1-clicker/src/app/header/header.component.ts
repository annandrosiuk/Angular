import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Clicker Game';
  show: boolean = true;

  @Input() name: string;
  @Output() setNewName = new EventEmitter();
  @Input() showVar: boolean;
  @Output() setToggle = new EventEmitter();

  emitNewName(value: string) {
    this.setNewName.emit(value);
  }

  toggleChild(val: boolean) {
    this.setToggle.emit(val);
    this.showVar = !this.showVar;
  }
}
