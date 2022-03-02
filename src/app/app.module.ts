import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemoService } from './services/memo.service';
import { MemosComponent } from './components/memos/memos.component';
import { MemoComponent } from './components/memo/memo.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MemosComponent,
    MemoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [MemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }