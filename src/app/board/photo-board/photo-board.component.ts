import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board, BoardPhoto } from '@app/services/board.class';
import { BtnTheme } from '@shared/button/button.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnInit {
  imgLink: string = '';
  btnTheme = BtnTheme;
  board: Board;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ board })=> {
      this.board = board;
    });
  }

  dismiss(): void {
    this.board.deleteNotSavedPhotos().then();
  }

  save(): void {
    this.board.savePhotos().then();
  }

  addBoardPhoto(): void {
    if (this.imgLink) {
      this.board.addPhoto(this.imgLink);
      this.imgLink = '';
    }
  }

  getBoardPhotos(): Observable<BoardPhoto[]> {
    return of(this.board.photos);
  }

  trackByFn(idx: number, p: BoardPhoto): string {
    return idx + p.getId();
  }
}
