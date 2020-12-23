import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoBoardResolver } from './photo-board-resolver';
import { PhotoBoardComponent } from './photo-board.component';

const routes: Routes = [
  { 
    path: ':name', 
    component: PhotoBoardComponent,
    resolve: {
      board: PhotoBoardResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class PhotoBoardRoutingModule {}