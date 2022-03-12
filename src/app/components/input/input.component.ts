import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MorseLetter } from 'src/app/morseLetter';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() data: MorseLetter[];
  @Output() getText: EventEmitter<String> = new EventEmitter();
  @Output() showComponentBox: EventEmitter<Boolean> = new EventEmitter();
  @Output() onSubmit = new EventEmitter();
  text: string = '';
  morseText: string = '';

  constructor() {}

  ngOnInit(): void {}

  transformToMorseLetter(): void {
    this.morseText = '';
    for (let i = 0; i < this.text.length; i++)
      if (this.text[i] !== ' ') {
        for (let j = 0; j < this.data.length; j++) {
          if (this.text[i].toLowerCase() === this.data[j].letter) {
            this.morseText += String(this.data[j].morseLetter);
            this.morseText += '   ';
          }
        }
      }
    this.getText.emit(this.text);
  }

  handleSubmit(): void {
    this.showComponentBox.emit(true);
    this.onSubmit.emit();
  }
}
