import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './features/panel/panel.component';

const routes: Routes = [  
  {
    path: 'painel',    
    loadChildren: () => import('./features/panel/panel.module').then(module => module.PanelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
