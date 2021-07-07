import { Component, OnInit } from '@angular/core';
import { Card, Slide } from './models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'profile';
  slideIndex = 1;
  slideWidth: number = 608;
  titleHeight: number = 75;
  cardNo: number = 165;

  slides: Array<Slide> = [
    {
      img: '../assets/images/1.jpg',
      title: 'Mobile First Responsive Design'
    },
    {
      img: '../assets/images/2.jpg',
      title: 'Progressive Web Apps'
    },
    {
      img: '../assets/images/3.jpg',
      title: 'Client/ Server-side scripting'
    },
    {
      img: '../assets/images/1.jpg',
      title: 'Front-end Web development'
    },
    {
      img: '../assets/images/4.jpg',
      title: ' Agile methodologies'
    },
  ]

  cards: Array<Card> = [
    {
      title: 'Mobile Web Applications',
      description: 'Responsive web design - whether a conventional website or a single-page application viewable on small screens that work well with touchscreens to Progressive Web Apps that can offer functionality such as working offline',
      icon: "mobile"
    },
    {
      title: 'E-commerce',
      description: 'A website that allows you to sell tangible goods, digital products or services online. Through an e-Commerce website, you can easily introduce your products to a large number of customers at once.',
      icon: 'cash-register'
    },
    {
      title: 'Web Development',
      description: 'From developing a simple static page to complex web applications and electronic businesses. including Web design, Web content development, client-side/server-side scripting, and Web server development.',
      icon: "globe"
    },
    {
      title: 'UI & UX',
      description: 'user interfaces for desktop, and mobile, with the focus on maximizing usability and the user experience. The goal is to make the user interaction as simple and efficient as possible, (user-centered design).',
      icon: 'eye'
    },
    {
      title: 'Content/ Copywrite',
      description: 'content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action, and or produce technical documentation that helps customers understand and use a product or service.',
      icon: "edit"
    },
    {
      title: 'Quality focus',
      description: 'Specific tools and techniques, such as continuous integration, automated unit testing, test-driven development, design patterns, code refactoring and other techniques to improve quality and enhance product development agility.',
      icon: 'shield-alt'
    },
    {
      title: 'Web Accessibility',
      description: 'Websites, tools, and technologies that are designed and developed so that people with disabilities can use them. More specifically, perceive, understand, navigate, and interact with the Web',
      icon: 'universal-access'
    },
    {
      title: 'Maintain',
      description: 'Content management, changes, hosting and maintenance for as long as the client would like',
      icon: 'tools'
    },
    {
      title: 'Scalable',
      description: 'Website that is able to handle an increase in users and load, whether in terms of a gradual or abrupt surge, without disrupting end-users',
      icon: "expand-arrows-alt"
    },
    // [33] This is predicated on designing and building quality in from the beginning and being able to demonstrate software for customers at any point, or at least at the end of every iteration

    //   We deliver quality solutions through selecting the best available technology tools to meet your specific need.

  ]

  constructor() {

  }

  ngOnInit() {
    this.nextSlide(0)
    // this.autoSlide()
  }

  autoSlide() {
  }



  nextSlide(n) {
    let dots: HTMLCollection = document.getElementsByClassName('dot');
    let slideContainer: HTMLDivElement = document.querySelector('.slideshow-container');
    let cardTitle: HTMLDivElement = document.querySelector("div.card-title.text-center.overflow-hidden > div")
    let cardNo: HTMLDivElement = document.querySelector("div.card-no.text-center.overflow-hidden.rounded > div")

    this.slideIndex = n

    slideContainer.style.left = `-${this.slideWidth * this.slideIndex}px`
    cardTitle.style.bottom = `${this.titleHeight * this.slideIndex}px`
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