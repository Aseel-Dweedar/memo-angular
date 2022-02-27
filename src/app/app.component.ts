import { Component } from '@angular/core';
import { MemoService } from './memo.service';
import { Memo } from './models/Memo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public memos!: Memo[];

  constructor(private memoService: MemoService) { }


  public getMemos(): void {

  }

}
