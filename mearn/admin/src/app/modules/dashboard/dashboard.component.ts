import { Component, OnInit } from '@angular/core';
import { ScriptService } from '../../core/assets-loader/assets-loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  [x: string]: any;

  title: string | undefined;

  constructor() {
    this['source'] = new ScriptService();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this['source'].linksLoad([
      'dashboard'
    ]).then((data: any) => {
      console.log('links loaded ', data);
    }).catch((error: any) => console.log(error))

    this['source'].scriptLoad([
      'chart', 'plugins', 'search', 'custom', 'customizer', 'dashboardEcommerce'
    ]).then((data: any) => {
      console.log('script loaded ', data);
    }).catch((error: any) => console.log(error))
  }
}
