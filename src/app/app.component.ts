import { Component } from '@angular/core';
import { Observable, take } from 'rxjs';
import { AdviceService } from './core/services/advice.service';
import { LoadingService } from './core/services/loading.service';
import { Slip } from './shared/models/advice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  slip!: Slip;
  constructor(private service: AdviceService, private loading: LoadingService) {
    this.loading.isLoading$.next(true);
    this.service
      .getAdvice()
      .pipe(take(1))
      .subscribe((data) => {
        this.slip = data;
        this.loading.isLoading$.next(false);
      });
  }

  sendNewRequest() {
    this.loading.isLoading$.next(true);

    this.service
      .getAdvice()
      .pipe(take(1))
      .subscribe((data) => {
        this.slip = data;
        this.loading.isLoading$.next(false);
      });
  }
}
