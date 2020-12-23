import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '@app/services/board.service';
import { BtnTheme } from '@shared/button/button.component';
import { Board } from '@app/services/board.class';

enum BoardName {
  photo = 'Photo'
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private _title: string;
  boards: Map<string, Board>;
  btnTheme = BtnTheme;

  get title () {
    return this._title;
  }
  set title (title: string) {
    this._title = `${BoardName[title]} Board`;
  }

  constructor(
    private router: Router,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    this.title = 'photo';
    this.boardService.getBoards()
      .subscribe((boards: Map<string, Board>) => {
        this.boards = boards;
        if (boards.size === 1) {
          this.navigateByKey(boards.keys().next().value)
        }
      })
  }

  getBoardsKeys(): string[] {
    return Array.from(this.boards.keys());
  }

  trackByFn(idx: number, name: string): string {
    return name + idx;
  }

  createBoard(): void {
    const name = prompt('Enter your new board name.', 'Safari');
    if (name) {
      if (!this.boardService.addBoard(name)) {
        alert('This name already exists.');
      }
    }
  }

  navigateByKey(key: string): void {
    this.router.navigate(['photo', key]);
  }
}
