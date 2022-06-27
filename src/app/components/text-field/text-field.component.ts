import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {
  @Input()
  formControl = new FormControl('')

  ngOnInit() {}

  onInput(e: any) {
    this.formControl && this.formControl.setValue(e.target.value);
  }
}
