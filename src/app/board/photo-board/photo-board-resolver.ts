import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Board } from '@app/services/board.class';
import { BoardService } from '@app/services/board.service';

@Injectable()
export class PhotoBoardResolver implements Resolve<Observable<Board | undefined>> {
  constructor(private service: BoardService) {}

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Board | undefined> {
    return of(this.service.getBoard(route.paramMap.get('name')));
  }
}