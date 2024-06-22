import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HomeComponent } from "../../components/home_component/home.component";
import { ServicesComponent } from "../../components/services_component/services.component";
import { AboutComponent } from "../../components/about_component/about.component";
import { ResumeComponent } from "../../components/resume/resume.component";
import { ProjectsComponent } from "../../components/projects_component/projects.component";
import { ContactComponent } from "../../components/contact_component/contact.component";

@Component({
    selector: 'app-index',
    standalone: true,
    templateUrl: './index.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, HomeComponent, ServicesComponent, AboutComponent, ResumeComponent, ProjectsComponent, ContactComponent]
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {}
}
