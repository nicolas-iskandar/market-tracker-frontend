import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input({ required: true }) isDarkMode!: boolean;
  @Output() toggleDarkModeOutput = new EventEmitter();

  toggleDarkMode() {
    this.toggleDarkModeOutput.emit();
  }
}
