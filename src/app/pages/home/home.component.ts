import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  task = new FormControl('', []);
  tasks: string[] = [];

  save() {
    localStorage.setItem('ang-todos', JSON.stringify(this.tasks));
  }

  addTask() {
    this.task.value && this.tasks.unshift(this.task.value);
    this.task.setValue('');
    this.save();
  }

  handleItemDelete(index: number) {
    this.tasks.splice(index, 1);
    this.save();
  }

  ngOnInit(): void {
    const data = localStorage.getItem('ang-todos');

    if (data) {
      const taskData = JSON.parse(data) as string[];
      this.tasks = taskData;
    }
  }
}
