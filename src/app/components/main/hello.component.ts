import { Component, Input, OnInit, Inject } from '@angular/core';


@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{ name || 'vazio' }}!</h1>
  <button routerLink="/sidekicks">Go to sidekicks</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string = '?';

  constructor() {

  }

    ngOnInit() {
      console.log('hello name: ', this.name);
    }
}
