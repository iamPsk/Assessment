import { Component, OnInit } from '@angular/core';
import { Card, Experience } from 'src/app/models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'profile';
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
      description: 'user interfaces with the focus on maximizing usability and the user experience.',
      icon: 'eye'
    },
    {
      title: 'Content/ Copywrite',
      description: 'content that aims to increase brand awareness and persuade a person to take a particular action',
      icon: "edit"
    },
    {
      title: 'Quality focus',
      description: 'continuous integration, test-driven, design patterns, and other techniques to enhance development.',
      icon: 'shield-alt'
    },
    {
      title: 'Web Accessibility',
      description: 'Websites that are designed and developed so that people with disabilities can use them.',
      icon: 'universal-access'
    },
    {
      title: 'Maintain',
      description: 'Content management, changes, hosting and website maintenance',
      icon: 'tools'
    },
    {
      title: 'Scalable',
      description: 'Website that is able to handle an increase in users and load without disrupting end-users',
      icon: "expand-arrows-alt"
    },
    // [33] This is predicated on designing and building quality in from the beginning and being able to demonstrate software for customers at any point, or at least at the end of every iteration

    //   We deliver quality solutions through selecting the best available technology tools to meet your specific need.

  ]
  experiences: Array<Experience> = [
    {
      title: 'Student Mentor',
      description: 'Lorem, consectetur adipisicing elit!',
      company: 'Google Africa Developer Scholarship',
      href: 'www.google.co.za'
    },
    {
      title: 'web developer',
      description: 'Lorem, consectetur adipisicing elit!',
      company: 'SLOWCODE',
      href: 'http://slowcode.co.za'
    },
    {
      title: 'Front-end Developer',
      description: 'Lorem, consectetur adipisicing elit!',
      company: 'Mkoko Computers',
      href: 'http://smart-pos.co.za'
    },
    {
      title: 'Front-end Developer',
      description: 'Lorem, consectetur adipisicing elit!',
      company: 'Tick Works',
      href: 'http://smart-pos.co.za'
    },
    {
      title: 'Student Mentor',
      description: 'Lorem, consectetur adipisicing elit!',
      company: 'Google Africa Developer Scholarship',
      href: 'http://smart-pos.co.za'
    },
  ]


  constructor() {

  }

  ngOnInit() {
  }

  // Select the node that will be observed for mutations
  // var targetNode = document.getElementById('some-id');

  // Options for the observer (which mutations to observe)
  // var config = { attributes: true, childList: true, subtree: true };

  // Callback function to execute when mutations are observed
  // var callback = function(mutationsList, observer) {
  // for(var mutation of mutationsList) {
  // if (mutation.type == 'childList') {
  // console.log('A child node has been added or removed.');
  // }
  // else/ if (mutation.type == 'attributes') {
  // console.log('The ' + mutation.attributeName + ' attribute was modified.');
  // }
  // }
  // };


  // Start observing the target node for configured mutations
  // observer.observe(targetNode, config);

  // Later, you can stop observing
  // observer.disconnect();
}