import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;
  isCategoryOpen = false;


 ngOnInit(): void {
     setInterval(() => {
      this.plusSlides(1);
    }, 3000);
  }
  
  currentIndex = 0;
slides = [
  { img: 'assets/images/htoo1.jpg' },
  { img: 'assets/images/bg photo1.jpg' },
  { img: 'assets/images/bg photo2.jpg' },
  { img: 'assets/images/bg photo3.jpg' },
  { img: 'assets/images/cake2.jpg' }
];


 toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.isCategoryOpen = false; // close category when menu closes
    }
  }

  toggleCategory() {
    this.isCategoryOpen = !this.isCategoryOpen;
  }

plusSlides(n: number) {
  const maxIndex = this.slides.length - 3; // prevent sliding past last visible group
  this.currentIndex = Math.min(Math.max(this.currentIndex + n, 0), maxIndex);
  this.updateSlidePosition();
}

currentSlide(index: number) {
  const maxIndex = this.slides.length - 3;
  this.currentIndex = Math.min(index, maxIndex);
  this.updateSlidePosition();
}

updateSlidePosition() {
  const container = document.querySelector('.slideshow-container') as HTMLElement;
  if (container) {
    container.style.transform = `translateX(-${this.currentIndex * (100 / 3)}%)`;
  }
}
}
