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


  cards: Array<Card> = [
    {
      title: 'Brandind',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/1.jpg',
      no: "01"
    },
    {
      title: 'Branding',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/2.jpg',
      no: "02"
    },
    {
      title: 'Development',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/3.jpg',
      no: "03"
    },
    {
      title: 'Translation',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      src: '../assets/images/4.jpg',
      no: "04"
    },
    {
      title: 'Deploying',
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
    this.slideIndex = n  
    
    // console.log(dots);
    
    elem.style.left = `-${this.slideWidth * this.slideIndex}px`

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      console.log(dots[i].className);
      
      // dots[i].classList.toggle('active')
    }    
  }

}





