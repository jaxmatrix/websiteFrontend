import { Component } from '@angular/core';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewsComponent } from './component/news/news.component';
import { ProjectsComponent } from './component/projects/projects.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss' ]
})
export class AppComponent {
  title = 'ProDex-Frontend';
}
