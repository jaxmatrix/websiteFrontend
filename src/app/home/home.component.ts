import { Component, OnInit } from '@angular/core';

import { NewsComponent } from '../component/news/news.component';
import { ProjectsComponent } from '../component/projects/projects.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
