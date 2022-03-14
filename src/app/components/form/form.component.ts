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

  @Output() submitFormEmit = new EventEmitter();
  @Output() formCloseEmit = new EventEmitter();
  @Input() currentMemo!: Memo | null;

  ngOnInit(): void { }

  private image: any = '';

  public async formSubmit(form: NgForm): Promise<void> {
    form.value.image = this.image;
    this.submitFormEmit.emit(form.value);
  }

  public handleFormClose(): void {
    this.formCloseEmit.emit();
  }

  public async fileChangeEvent(fileInput: any): Promise<void> {
    this.image = await this.getBase64(fileInput.target.files[0]);
  }

  public getBase64(file: Blob): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
