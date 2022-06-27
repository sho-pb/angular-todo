import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formValue = '';
  task = new FormControl('', [])
  tasks = [];

  constructor() { }

  ngOnInit(): void {
  }
}
