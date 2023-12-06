import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';
import { BooksModule } from '../books/books.module';


@NgModule({
  declarations: [
    PanelComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    BooksModule
  ]
})
export class PanelModule { }
