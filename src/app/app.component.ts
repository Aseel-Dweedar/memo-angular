import { Component, OnInit } from '@angular/core';
import { MemoService } from './services/memo.service';
import { Memo } from './models/Memo';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    this.getMemos();
  }

  public memos!: Memo[];

  constructor(private memoService: MemoService) { }


  public getMemos(): void {

    // this method is return an observable so we need to subscribe (get notified) when the data received
    this.memoService.getMemos().subscribe({
      next: (response) => this.memos = response,
      error: (e) => console.error(e),
    });
  }

}
