import { Component } from '@angular/core';
import {
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';
import { Books } from 'src/app/core/interfaces/books';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss'],
})
export class ListBooksComponent {
  books!: Books[];
  page = 1;
  closeResult = '';

  constructor(
    private booksService: BooksService,
    private offcanvasService: NgbOffcanvas
  ) {}

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks() {
    this.books = [];
    this.booksService.listBooks().subscribe({
      next: (data: any) => {
        this.books = data;
      },
      error: () => {
        alert('Ocorreu um erro!');
      },
    });
  }

  deleteBook(itemId: any) {
    this.booksService.deleteBook(itemId).subscribe({
      next: () => {
        this.listBooks();
      }, error: () => {
        alert('Ocorreu um erro!')
      }
    });
  }

  openActionBar(content: any) {
    this.offcanvasService.open(content, { position: 'end' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        this.listBooks();
      },
      (reason) => {
        this.listBooks();
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case OffcanvasDismissReasons.ESC:
        return 'by pressing ESC';
      case OffcanvasDismissReasons.BACKDROP_CLICK:
        return 'by clicking on the backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
