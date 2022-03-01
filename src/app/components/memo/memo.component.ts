import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Memo } from 'src/app/models/Memo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() deleteEventEmitter = new EventEmitter();

  @Input() memo!: Memo;

  faTimes = faTimes;

  setDeleteMemo(): void {
    this.deleteEventEmitter.emit(this.memo?.id);
  }

}
