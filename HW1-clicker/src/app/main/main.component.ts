import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  name = '';
  title: string = 'Clicker Game';
  form: FormGroup

  constructor(private router: Router, private userService: UserService) { }

  addNewName() {
    this.userService.addNewName(this.name);
    this.name = '';
    this.router.navigate(['/game'])
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.minLength(2),
        Validators.required
      ])
    });
  }

  submit() {
    if (this.form.valid) {
      const formData = { ...this.form.value };
    }
  }

}
