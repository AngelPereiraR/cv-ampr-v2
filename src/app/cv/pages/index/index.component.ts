import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HomeComponent } from '../../components/home_component/home.component';
import { ServicesComponent } from '../../components/services_component/services.component';
import { AboutComponent } from '../../components/about_component/about.component';
import { ResumeComponent } from '../../components/resume_component/resume.component';
import { ProjectsComponent } from '../../components/projects_component/projects.component';
import { NavbarIndexComponent } from '../../components/navbar-index/navbar-index.component';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    NavbarIndexComponent,
  ],
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {}
}
