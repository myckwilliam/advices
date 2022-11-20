import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Slip } from 'src/app/shared/models/advice';

@Component({
  selector: 'app-advice-card',
  templateUrl: './advice-card.component.html',
  styleUrls: ['./advice-card.component.scss'],
})
export class AdviceCardComponent {
  @Input() slip!: Slip;
  @Output() buttonClick = new EventEmitter();

  private loadingService = inject(LoadingService);

  isLoading$ = this.loadingService.isLoading$;

  emitClick() {
    this.buttonClick.emit();
  }
}
