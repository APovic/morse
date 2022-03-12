import { Component, OnInit } from '@angular/core';
import { MorseLetter } from 'src/app/morseLetter';
import { MorseService } from 'src/app/services/morse.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  data: MorseLetter[];
  text: string;
  showComponentBox: boolean = false;
  showBox: boolean = true;
  timeUnit: number = 300;

  constructor(private morseService: MorseService) {}

  ngOnInit(): void {
    this.morseService.getData().subscribe((data) => (this.data = data));
  }
  handleText(text: string): void {
    this.text = text;
  }
  handleShowBox(isTrue: boolean): void {
    this.showComponentBox = isTrue;
  }
  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  visual = async () => {
    if (this.text === ' ') {
      this.showBox === true;
    }
    for (let i = 0; i < this.text.length; i++) {
      if (this.text[i] === ' ' && this.showBox === true)
        await this.sleep(this.timeUnit * 7).then(() => (this.showBox = false));
      else if (i !== 0 && this.showBox === true)
        await this.sleep(this.timeUnit * 3).then(() => (this.showBox = false));
      else if (i === 0 && this.showBox === true)
        await this.sleep(0).then(() => (this.showBox = false));
      for (let j = 0; j < this.data.length; j++) {
        if (this.text[i].toLowerCase() === this.data[j].letter) {
          for (let z = 0; z < this.data[j].morseLetter.length; z++) {
            if (this.data[j].morseLetter[z] === ' ') {
              await this.sleep(this.timeUnit).then(
                () => (this.showBox = false)
              );
            }
            if (this.data[j].morseLetter[z] === '.') {
              await this.sleep(this.timeUnit).then(() => (this.showBox = true));
            }
            if (this.data[j].morseLetter[z] === '-') {
              await this.sleep(this.timeUnit * 3).then(
                () => (this.showBox = true)
              );
            }
          }
        }
      }
    }
  };
}
