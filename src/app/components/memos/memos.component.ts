import { Component, OnInit } from '@angular/core';
import { Memo } from 'src/app/models/Memo';
import { MemoService } from 'src/app/services/memo.service';
@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})

export class MemosComponent implements OnInit {

  ngOnInit(): void {
    this.getMemos();
  }

  public memos: Memo[] = [];

  constructor(private memoService: MemoService) { }


  public getMemos(): void {

    // this method is return an observable so we need to subscribe (get notified) when the data received
    this.memoService.getMemos().subscribe({
      next: (response) => this.memos = response,
      error: (e) => console.error(e),
    });
  }

  public deleteMemo(id: number): void {
    this.memoService.deleteMemo(id).subscribe({
      error: (e) => console.error(e),
    });
  }

  public addMemo(memo: Memo): void {
    console.log(memo);
    // console.log( memo.tags.split(',') );
    // let tags = memo.tags.split(",");
    // this.memoService.addMemo(memo).subscribe({
    //   next: () => this.memoService.getMemos().subscribe({
    //     next: (response) => this.memos = response,
    //     error: (e) => console.error(e),
    //   }),
    //   error: (e) => console.error(e),
    // });
  }

}
