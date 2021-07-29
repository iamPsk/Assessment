import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit {
  slideIndex = 0;
  slideWidth: number;
  slideTitleHeight: number;
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

  }

  ngAfterViewInit(): void {

    this.activateObserver()

    // let x = this.counter()

    // setInterval(() => {
    //   this.nextslide(x.next().value)
    // }, 5000)

  }


  nextslide(n) {

    let slideContainer: HTMLDivElement = document.querySelector('.slideshow-container');
    let slideTitle: HTMLDivElement = document.querySelector(".slide-title.overflow-hidden > div")
    let cardNo: HTMLDivElement = document.querySelector("div.card-no.text-center.overflow-hidden.rounded > div")

    slideContainer.animate({
      left: `-${this.slideWidth * n}px`,
    },
      {
        duration: 1000,
        easing: "ease",
        fill: "both",
      })

    slideTitle.animate({
      bottom: `${this.slideTitleHeight * n}px`,
    }, {
      duration: 1000,
      easing: "ease-in",
      fill: "both"
    })

    cardNo.animate({
      bottom: `${this.cardNo * n}px`,
    },
      {
        duration: 1000,
        easing: "ease-out",
        fill: "both",
      })

    this.toggleDots(n)

  }

  toggleDots(n) {

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
    let h1: HTMLElement = document.querySelector("h1.slide-heading.h1-responsive.text-light")
    let div: HTMLDivElement = document.querySelector('header > section > div > div.col-lg-10.p-0 > div')
    let h1Container: HTMLDivElement = document.querySelector(".slide-title.overflow-hidden")
    let imgContainer: HTMLElement = document.querySelector(".my-slides.shadow.rounded")

    let observer = new (window as any).ResizeObserver(() => {
      
      this.slideWidth = imgContainer.offsetWidth + 48
      this.slideTitleHeight = h1.offsetHeight + 8

      h1Container.style.height = `${this.slideTitleHeight}px`
    });

    observer.observe(div)
  }
}
