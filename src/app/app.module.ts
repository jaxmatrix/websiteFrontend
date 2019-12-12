import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NewsComponent } from './component/news/news.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ProjectCardComponent } from './component/projects/project-card/project-card.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { SummaryComponent } from'./new-project/summary/summary.component';
import { BudgetComponent } from './new-project/budget/budget.component';
import { TimelineComponent } from './new-project/timeline/timeline.component';

const appRoutes: Routes = [
  { path: '' , redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home' , component : HomeComponent },
  { path: 'projects' , component : ProjectPageComponent },
  { path: 'register' , component : RegisterComponent },
  { path: 'user' , component : UserComponent },
  { path: 'new_project' , component : NewProjectComponent, children:
    [{path: 'summary' , component: SummaryComponent , outlet : 'lollipop'},
     {path: 'budget' , component: BudgetComponent , outlet : 'lollipop'},
     {path: 'timeline' , component: TimelineComponent , outlet : 'lollipop'}
    ]},
  // { path: 'new-project/summary', component:SummaryComponent , outlet:'lollipop'},
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ProjectPageComponent,
    RegisterComponent,
    UserComponent,
    HomeComponent,
    NewProjectComponent,
    SummaryComponent,
    BudgetComponent,
    TimelineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
