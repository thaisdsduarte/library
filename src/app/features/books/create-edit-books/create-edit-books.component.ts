import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BooksService } from 'src/app/core/services/books.service';

@Component({
  selector: 'app-create-edit-books',
  templateUrl: './create-edit-books.component.html',
  styleUrls: ['./create-edit-books.component.scss'],
})
export class CreateEditBooksComponent {
  @Input() offcanvas: any;
  @Input() idBook: any;

  booksForm!: FormGroup;
  isAddMode!: boolean;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.isAddMode = !this.idBook;
    this.booksForm = new FormGroup({
      titulo: new FormControl(''),
      editora: new FormControl(''),
      edicao: new FormControl(''),
      anoPublicacao: new FormControl(''),
      autor: new FormControl(''),
      assunto: new FormControl(''),
    });
    this.getBookById();
  }

  getBookById() {
    if(!this.isAddMode) {
      this.booksService.getBookById(this.idBook).subscribe({
        next: (data: any) => {
          this.booksForm.get('titulo')?.patchValue(data.titulo);
          this.booksForm.get('editora')?.patchValue(data.editora);
          this.booksForm.get('edicao')?.patchValue(data.edicao);
          this.booksForm.get('anoPublicacao')?.patchValue(data.anoPublicacao);
          this.booksForm.get('autor')?.patchValue(data.autor);
          this.booksForm.get('assunto')?.patchValue(data.assunto);
        }, error: () => {
          alert('Ocorreu um erro!');
        }
      });
    }
  }

  onSubmit() {
    if (this.isAddMode) {
      this.createBook();
    } else {
      this.updateBook();
    }
  }

  createBook() {
    const form = this.configureForm();

    this.booksService.createBook(form).subscribe({
      next: () => {
        this.offcanvas.dismiss('Cross click');
      },
      error: () => {
        alert('Ocorreu um erro');
      },
    });
  }

  updateBook() {
    const form = this.configureForm();

    this.booksService.updateBook(form, this.idBook).subscribe({
      next: () => {
        this.offcanvas.dismiss('Cross click');
      },
      error: () => {
        alert('Ocorreu um erro');
      },
    });
  }

  configureForm() {
    const form = this.booksForm.value;

    form.edicao = this.formatNumbers(form.edicao);
    form.anoPublicacao = this.formatNumbers(form.anoPublicacao);

    return form;
  }

  formatNumbers(value: string | number = '') {
    if (!value) {
      return null;
    }
    if (typeof value === 'string') {
      return value;
    }
    return value;
  }
}
