import { Component, OnInit } from '@angular/core';

export interface Card{
  title: string,
  description: string,
  src: string,
  no: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'profile';
  slideIndex = 1;
  slideWidth: number = 608;
  titleHeight: number = 131;
  cardNo: number = 131;

  cards: Array<Card> = [
    {
      title: 'Branding',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/1.jpg',
      no: "01"
    },
    {
      title: 'Design',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/2.jpg',
      no: "02"
    },
    {
      title: 'Develop',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/3.jpg',
      no: "03"
    },
    {
      title: 'Translate',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/4.jpg',
      no: "04"
    },
    {
      title: 'Deploy',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/1.jpg',
      no: "05"
    },

  ]

  constructor(){

  }
  
  ngOnInit(){
    // document.getElementsByClassName('dots')[0].classList.toggle('active') 
  }
  
  nextSlide(n){
    let dots: HTMLCollection = document.getElementsByClassName('dot');
    let elem: HTMLDivElement = document.querySelector('.slideshow-container');
    let elem1: HTMLDivElement = document.querySelector("div.card-title.text-center.overflow-hidden > div")
    let elem2: HTMLDivElement = document.querySelector("div.card-no.text-center.overflow-hidden.rounded > div")

    this.slideIndex = n  
    
    // console.log(dots);
    
    elem.style.left = `-${this.slideWidth * this.slideIndex}px`
    elem1.style.bottom = `${this.titleHeight * this.slideIndex}px`
    elem2.style.bottom = `${this.cardNo * this.slideIndex}px`
    

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      // console.log(dots[i].className);
      
    }    
  }

}