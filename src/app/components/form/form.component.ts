import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Memo } from 'src/app/models/Memo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  @Output() addFormEmit = new EventEmitter();
  @Input() showUpdateForm!: boolean;
  @Input() currentMemo!: Memo | null;

  ngOnInit(): void {
  }

  addMemo(form: NgForm): void {
    this.addFormEmit.emit(form.value);
  }

  public updateMemo(): void {
    console.log("just here");
  }

}
