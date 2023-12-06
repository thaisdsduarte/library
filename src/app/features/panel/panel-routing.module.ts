import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { ListBooksComponent } from '../books/list-books/list-books.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'livros',
        pathMatch: 'full'
      },
      {
        path: 'livros',
        component: ListBooksComponent,
        loadChildren: () => import('../books/books.module').then(module => module.BooksModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
