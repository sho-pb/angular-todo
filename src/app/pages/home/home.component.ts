import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  task = new FormControl('', []);
  tasks: string[] = [];

  test() {
    this.task.value && this.tasks.push(this.task.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
