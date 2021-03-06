import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Memo } from 'src/app/models/Memo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
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
  @Output() updateEventEmitter = new EventEmitter();
  @Output() likesUpdateEmitter = new EventEmitter();

  @Input() memo!: Memo;

  /*
    // get hight of div
    @Output() height: number = 0;
    @ViewChild('oneCard') oneCard!: ElementRef;
    ngAfterViewInit() {
      this.height = this.oneCard.nativeElement.offsetHeight;
      console.log(this.height);
    }
  */


  faTimes = faTimes;
  faPen = faPen;
  faThumbsUp = faThumbsUp;

  setDeleteMemo(): void {
    this.deleteEventEmitter.emit(this.memo?.id);
  }

  setShowUpdateForm(): void {
    this.updateEventEmitter.emit();
  }

  setMemoLikes(): void {
    this.likesUpdateEmitter.emit();
  }

}
