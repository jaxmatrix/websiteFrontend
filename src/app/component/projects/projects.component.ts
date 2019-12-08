import { Component, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from './models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    new Project('Awesome', 'This is some regular text but it is awesome '),
    new Project('Awesome', 'This is diufasdfhkh ome regular text but it is awesome '),
    new Project('Awesome', 'This is some regular text but it is awesome '),
  ];

  constructor() { }

  ngOnInit() {
  }

}
