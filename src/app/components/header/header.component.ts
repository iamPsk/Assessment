import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {
  slideIndex = 1;
  slideWidth: number = 608;
  titleHeight: number = 75;
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

  constructor() { 
  }
  
  ngOnInit(): void {
    // this.nextSlide(0);
  }
  
  ngAfterViewInit(): void {
    this.nextSlide(0)
    this.activateObserver()
  }

  nextSlide(n) {
    let titleH1: HTMLElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.slide-title.overflow-hidden > div > h1:nth-child(1)")

    let dots: HTMLCollection = document.getElementsByClassName('dot');
    let slideContainer: HTMLDivElement = document.querySelector('.slideshow-container');
    let slideTitle: HTMLDivElement = document.querySelector(".slide-title.overflow-hidden > div")
    let cardNo: HTMLDivElement = document.querySelector("div.card-no.text-center.overflow-hidden.rounded > div")
    
    this.slideIndex = n
    slideContainer.style.left = `-${this.slideWidth * this.slideIndex}px`
    // slideTitle.style.bottom = `${this.titleHeight * this.slideIndex}px`
    slideTitle.style.bottom = `${(titleH1.offsetHeight + 8) * this.slideIndex}px`
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

  activateObserver(){
    let titleH1: HTMLElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.slide-title.overflow-hidden > div > h1")

    // let titleSlider = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.slide-title.overflow-hidden > div")

    let resizeDiv = document.querySelector('body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div')

    let sliderContainer:HTMLDivElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.slide-title.overflow-hidden")

    let it: HTMLElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.position-relative.overflow-hidden > div > div:nth-child(1)")

    const resizeObserver = new ResizeObserver(() => {
      this.slideWidth = it.offsetWidth + 48
      sliderContainer.style.height = `${titleH1.offsetHeight + 8}px`    
      // console.log('sizechanged');
    });

    resizeObserver.observe(resizeDiv)
  }
}
