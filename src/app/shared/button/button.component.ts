import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export enum BtnTheme {
  dark = 'dark',
  light = 'light'
} 

@Component({
  selector: 'app-button',
  template: `<button [disabled]="disabled" [class]="theme" [class.disabled]="disabled" (click)="onClick.emit()">{{text}}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() theme: string = BtnTheme.light;
  @Input() text!: string;
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {}
}
