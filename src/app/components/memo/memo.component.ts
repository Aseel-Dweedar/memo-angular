import { Component, Input, OnInit } from '@angular/core';
import { Memo } from 'src/app/models/Memo';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() memo!: Memo;

}
