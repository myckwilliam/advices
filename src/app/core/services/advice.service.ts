import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Advice, Slip } from 'src/app/shared/models/advice';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AdviceService {
  constructor(private http: HttpClient) {}

  getAdvice(): Observable<Slip> {
    const url = environment.urls.ADVICE;
    return this.http.get<Advice>(url).pipe(map((data) => data.slip));
  }
}
