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

  addTask() {
    this.task.value && this.tasks.unshift(this.task.value);
    this.task.setValue('')
  }

  handleItemDelete(index: number) {
    this.tasks.splice(index, 1);
  }

  constructor() {}

  ngOnInit(): void {}
}
