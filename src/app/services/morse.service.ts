import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MorseLetter } from '../morseLetter';

@Injectable({
  providedIn: 'root',
})
export class MorseService {
  private apiUrl = ' http://localhost:5000/Morse-Letters';
  constructor(private http: HttpClient) {}

  getData(): Observable<MorseLetter[]> {
    return this.http.get<MorseLetter[]>(this.apiUrl);
  }
}
