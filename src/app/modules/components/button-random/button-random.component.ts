import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-random',
  templateUrl: './button-random.component.html',
  styleUrls: ['./button-random.component.scss'],
})
export class ButtonRandomComponent {
  @Output() buttonClick = new EventEmitter();

  emitClick() {
    this.buttonClick.emit();
  }
}
