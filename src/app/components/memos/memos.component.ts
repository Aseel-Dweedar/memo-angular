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

  public showUpdateForm: boolean = false;

  public currentMemo: Memo | null = null;

  constructor(private memoService: MemoService) { }


  public getMemos(): void {

    // this method is return an observable so we need to subscribe (get notified) when the data received
    this.memoService.getMemos().subscribe({
      next: (response) => this.memos = response,
      error: (e) => console.error(e),
    });
  }

  public setShowForm(memo: Memo | null): void {
    this.showUpdateForm = !this.showUpdateForm;
    this.currentMemo = this.currentMemo ? null : memo;
  }

  public deleteMemo(id: number): void {
    this.memoService.deleteMemo(id).subscribe({
      next: () => this.getMemos(),
      error: (e) => console.error(e),
    });
  }

  public onFormSubmit(memo: Memo): void {
    memo.tags = memo?.tags.toLocaleString().split(",", memo.tags.length)
    if (this.currentMemo) {
      this.memoService.updateMemo(memo, this.currentMemo.id).subscribe({
        next: () => this.getMemos(),
        error: (e) => console.error(e.message),
      });
      return;
    }
    this.memoService.addMemo(memo).subscribe({
      next: () => this.getMemos(),
      error: (e) => console.error(e.message),
    });
    this.showUpdateForm = false;
    this.currentMemo = null;

  }

}
