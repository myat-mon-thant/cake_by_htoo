import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
    isMenuOpen = false;
  isCategoryOpen = false;

toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.isCategoryOpen = false; // close category when menu closes
    }
  }

  toggleCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }
  
}
