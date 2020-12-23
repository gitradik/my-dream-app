import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Board } from '@services/board.class';

@Injectable()
export class BoardService {
  private boards = new BehaviorSubject<Map<string, Board>>(new Map().set('Safari', new Board(0, 'Safari')));

  constructor() {}

  private getValue(): Map<string, Board> {
    return this.boards.value;
  }

  getBoards(): Observable<Map<string, Board>> {
    return this.boards;
  }

  getBoard(name: string): Board {
    return this.boards.value.get(name);
  }

  addBoard(name: string): boolean {
    const map = this.getValue();
    if (!map.has(name)) {
      const board = new Board(map.size, name);
      map.set(name, board);
      this.boards.next(map);
      return true;
    }
    return false;
  }
}
