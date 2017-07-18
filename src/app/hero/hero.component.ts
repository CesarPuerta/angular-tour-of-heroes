import { Component, OnInit } from '@angular/core';

export class Hero {
  id: number;
  name: string
}

@Component({
  selector: 'app-hero',
  template: ``
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
