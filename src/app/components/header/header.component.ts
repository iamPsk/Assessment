import { Component, OnInit } from '@angular/core';
import { Slide, Card } from 'src/app/models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  slideIndex = 1;
  slideWidth: number = 608;
  titleHeight: number = 78;
  cardNo: number = 165;

  slides: Array<Slide> = [
    {
      img: '../assets/images/1.jpg',
      title: 'Mobile Web development'
    },
    {
      img: '../assets/images/2.jpg',
      title: 'Server-side scripting'
    },
    {
      img: '../assets/images/3.jpg',
      title: 'Progressive Web Apps'
    },
    {
      img: '../assets/images/1.jpg',
      title: 'Web Content'
    },
    {
      img: '../assets/images/WakeInternalMedicine-ResponsiveScreens-e1593623160290.png',
      title: 'Mobile First Responsive Design'
      
    },
  ]



  constructor() { }

  ngOnInit(): void {
    this.nextSlide(0)
  }

  nextSlide(n) {
    // document.querySelector("body > app-root > header > section > div > div.col-10.p-0 > div > div.d-flex.position-relative > div.slide-title.text-center.overflow-hidden > div")
    let dots: HTMLCollection = document.getElementsByClassName('dot');
    let slideContainer: HTMLDivElement = document.querySelector('.slideshow-container');
    let slideTitle: HTMLDivElement = document.querySelector(".slide-title.overflow-hidden > div")
    let cardNo: HTMLDivElement = document.querySelector("div.card-no.text-center.overflow-hidden.rounded > div")

    this.slideIndex = n

    slideContainer.style.left = `-${this.slideWidth * this.slideIndex}px`
    slideTitle.style.bottom = `${this.titleHeight * this.slideIndex}px`
    cardNo.style.bottom = `${this.cardNo * this.slideIndex}px`



    for (let i = 0; i < dots.length; i++) {

      if (dots[i].classList.contains('active')) {
        dots[i].classList.remove('active')
      }


      if (i == this.slideIndex) {
        dots[i].classList.add('active')
      }

    }


    
  }

}
