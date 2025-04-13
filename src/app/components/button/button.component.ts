import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label!: string;
  // @Input() imgStyle!: string;
  // @Input() icon!: string;
  @Input() isDisabled!: boolean;
  @Input() buttonStyle!: string;
  @Output() triggerFunc = new EventEmitter();
}
