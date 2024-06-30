import { Routes } from '@angular/router';
import { IndexComponent } from './cv/pages/index/index.component';
import { ProjectsComponent } from './cv/pages/projects/projects.component';
import { ProjectComponent } from './cv/pages/project/project.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
