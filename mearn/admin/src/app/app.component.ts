import { Component, OnInit, OnChanges } from '@angular/core';
import { ScriptService } from './core/assets-loader/assets-loader.service';

@Component({
  selector: 'app-root',
  template:
    `<app-header></app-header>
        <router-outlet></router-outlet>
    <app-footer></app-footer>`,
  providers: [ScriptService]
})

export class AppComponent implements OnInit, OnChanges {

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {}
}