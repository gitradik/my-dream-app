import { NgModule } from '@angular/core';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './board.component';
import { SharedModule } from '@app/shared/shared.module';
import { BoardService } from '@app/services/board.service';

@NgModule({
  imports: [
    BoardRoutingModule,
    SharedModule
  ],
  declarations: [BoardComponent],
  exports: [BoardComponent],
  providers: [BoardService]
})
export class BoardModule {}