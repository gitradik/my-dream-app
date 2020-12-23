import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardRoutingModule } from './photo-board-routing.module'
import { PhotoBoardResolver } from './photo-board-resolver';

@NgModule({
  imports: [
    FormsModule,
    PhotoBoardRoutingModule,
    SharedModule,
  ],
  declarations: [PhotoBoardComponent],
  providers: [PhotoBoardResolver],
  exports: [PhotoBoardComponent]
})
export class PhotoBoardModule { }
