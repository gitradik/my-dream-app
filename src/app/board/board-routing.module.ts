import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board.component';

const routes: Routes = [
  {
    path: '',
    component: BoardComponent,
    children: [
      {
        path: 'photo',
        loadChildren: () => import('./photo-board/photo-board.module').then(m => m.PhotoBoardModule),
      },
      { 
        path: '', 
        redirectTo: 'photo', 
        pathMatch: 'full' 
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}