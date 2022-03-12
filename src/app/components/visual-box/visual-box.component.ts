import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MorseLetter } from 'src/app/morseLetter';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-visual-box',
  templateUrl: './visual-box.component.html',
  styleUrls: ['./visual-box.component.scss'],
})
export class VisualBoxComponent implements OnInit {
  @Input() text: string = '';
  @Input() data: MorseLetter[];
  @Input() showBox: boolean;
  @Output() hideComponentBox: EventEmitter<Boolean> = new EventEmitter();

  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {
  
  }

  handleClose(): void {
    this.hideComponentBox.emit(false);
  }
}
