import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
    
  constructor(private darkModeService: DarkModeService) {}
  darkMode$ = this.darkModeService.darkMode$;

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
