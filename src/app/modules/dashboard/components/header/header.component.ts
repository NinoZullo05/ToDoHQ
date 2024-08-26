import { Component } from '@angular/core';
import { NgFor, NgIf  } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf, MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
user: any = {
  name : "example user",
  email : "test1@test.com",
  image : "https://example.com/image1.jpg"
};
images = [
  { src: '../../../../../assets/images/img2.png', alt: 'Image 2' },
  { src: '../../../../../assets/images/img4.png', alt: 'Image 5' },
  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },
  { src: '../../../../../assets/images/img4.png', alt: 'Image 5' },
  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },
  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },
  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },
  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },
  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },
  { src: '../../../../../assets/images/img3.png', alt: 'Image 4' },



];

}
