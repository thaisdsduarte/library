import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './list-books/list-books.component';
import { CreateEditBooksComponent } from './create-edit-books/create-edit-books.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListBooksComponent,
    CreateEditBooksComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
