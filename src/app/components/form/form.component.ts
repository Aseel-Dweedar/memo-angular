import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Output() addFormEmit = new EventEmitter();

  ngOnInit(): void {
  }

  addMemo(form: NgForm): void {
    this.addFormEmit.emit(form.value);
  }

}
