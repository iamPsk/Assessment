import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {
  slideIndex = 0;
  slideWidth: number = 608;
  slideTitleHeight: number = 75;
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
    this.nextslide(this.slideIndex)
  }

  ngAfterViewInit(): void {

    let titleH1: HTMLElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.slide-title.overflow-hidden > div > h1:nth-child(1)")

    console.log(titleH1.offsetHeight);
    
    this.slideTitleHeight = titleH1.offsetHeight
    titleH1.style.height = `${titleH1.offsetHeight / 2}px`

    this.activateObserver()

    // let x = this.counter()

    // setInterval(() => {
    //   this.nextSlide(x.next().value)
    // }, 5000)
  }

  nextslide(n){
    
    let slideContainer: HTMLDivElement = document.querySelector('.slideshow-container');
    let slideTitle: HTMLDivElement = document.querySelector(".slide-title.overflow-hidden > div")
    let cardNo: HTMLDivElement = document.querySelector("div.card-no.text-center.overflow-hidden.rounded > div")

    slideContainer.animate(
      [
        { 
          left: `-${this.slideWidth * n}px`
        }
      ], {
        duration: 1000,
        easing: "ease",
        fill: "both",
      }
    )

    slideTitle.animate(
      [
        { 
          bottom: `${(this.slideTitleHeight + 8) * n}px`
        }
      ], {
        duration: 1000,
        easing: "ease-in",
        fill: "both"
      }
    )

    cardNo.animate(
      [
        { 
          bottom: `${this.cardNo * n}px`
        }
      ], {
        duration: 1000,
        easing: "ease-out",
        fill: "both"
      }
    )

    this.toggleDots(n)

  }

  toggleDots(n){

    let dots: HTMLCollection = document.getElementsByClassName('dot');

    for (let i = 0; i < dots.length; i++) {

      if (dots[i].classList.contains('active')) {
        dots[i].classList.remove('active')
      }


      if (i == n) {
        dots[i].classList.add('active')
      }
    }
  }

  counter() {

    function* gen() {
      for (let i = 0; i < 5; i++) {
        yield i

        if (i == 4) {
          i = -1
        }
      }
    }

    return gen()
  }

  activateObserver() {
    let titleH1: HTMLElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.slide-title.overflow-hidden > div > h1")
    let resizeDiv = document.querySelector('body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div')
    let sliderContainer: HTMLDivElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.slide-title.overflow-hidden")
    
    let it: HTMLElement = document.querySelector("body > app-root > app-header > header > section > div > div.col-lg-10.p-0 > div > div.d-flex.position-relative > div.position-relative.overflow-hidden > div > div:nth-child(1)")

    let observer = new (window as any).ResizeObserver(() => {
      this.slideWidth = it.offsetWidth + 48
      this.slideTitleHeight = titleH1.offsetHeight
      sliderContainer.style.height = `${this.slideTitleHeight + 8}px`
    });

    observer.observe(resizeDiv)
  }
}
