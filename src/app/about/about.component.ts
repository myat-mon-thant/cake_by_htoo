import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
selectedImage: string | null = null;

openImage(image: string) {
  this.selectedImage = image;
}

closeImage() {
  this.selectedImage = null;
}
}
