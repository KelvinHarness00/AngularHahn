import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `
    <button class="rainbow-btn"(mousedown)="showImage()" (mouseup)="hideImage()">Pressione-me</button>
    <img id="image" src="assets/img/SophiaLegal.jpg" alt="Imagem">`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showImage() {
    const image = document.querySelector('#image') as HTMLImageElement;
    if (image !== null) {
      image.style.display = 'block';
    }
  }
  
  hideImage() {
    const image = document.querySelector('#image') as HTMLImageElement;
    if (image !== null) {
      image.style.display = 'none';
    }
  }

  
}
