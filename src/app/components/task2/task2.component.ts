import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit, AfterViewInit {

  activePill = 1;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{

    let input:HTMLInputElement = document.querySelector('div.d-flex.justify-content-center.align-items-end.custom-options.pb-4 > label > input[type=checkbox]')

    window.addEventListener("wheel", (e) => {
      console.log('scrolling');
      
      input.checked ? input.checked = false : input.checked = true
        this.togglePill()
    })

    // document.addEventListener("keydown", (e) =>{
    //   if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowDown") {
    //     input.checked ? input.checked = false : input.checked = true
    //     this.togglePill()
    //   }      
    // })
  }

  togglePill(){
    this.activePill === 1 ? this.activePill = 2 : this.activePill = 1
  }

  togglePillRE(){

  }
}
