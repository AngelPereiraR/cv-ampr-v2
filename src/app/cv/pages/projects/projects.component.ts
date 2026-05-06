import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarGeneralComponent } from '../../components/navbar-general/navbar-general.component';
import { TranslocoModule } from '@jsverse/transloco';
import { Project } from '../../../classes/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarGeneralComponent, TranslocoModule],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  public projects: Project[] = [
    new Project(
      1,
      'Dulce Blog',
      [1, 2, 3, 4],
      ['assets/dulceblog.webp'],
      ['Angular', 'ExpressJS'],
      'https://github.com/AngelPereiraR/dulce_blog_web',
      'https://dulce-blog.netlify.app/'
    ),
    new Project(
      2,
      'FrutyFest',
      [1, 2, 3, 4],
      ['assets/frutyfest.webp'],
      ['Angular', 'NestJS'],
      'https://github.com/AngelPereiraR/frutyfest-web',
      'https://project-frutyfest.netlify.app/'
    ),
    new Project(
      3,
      'Gestión Empresas',
      [1, 2, 3, 4, 5],
      [
        'assets/projects/gestion-empresas/01-login.webp',
        'assets/projects/gestion-empresas/02-companies.webp',
        'assets/projects/gestion-empresas/03-buy.webp',
        'assets/projects/gestion-empresas/04-suggestions.webp',
        'assets/projects/gestion-empresas/05-order.webp',
        'assets/projects/gestion-empresas/06-make-order.webp',
      ],
      ['Flutter', 'Java (Spring)'],
      'https://github.com/AngelPereiraR/business_management_frontend',
      'assets/gestion-empresas.apk'
    ),
    new Project(
      4,
      'SalesIn',
      [1, 2, 3, 4, 5],
      ['assets/salesin.webp'],
      ['Laravel']
    ),
    new Project(
      5,
      'GestionCursos',
      [1, 2, 3],
      ['assets/gestioncursos.webp'],
      ['Java (Spring)'],
      'https://github.com/AngelPereiraR/gestioncursos'
    ),
    new Project(
      6,
      'Almagest',
      [1, 2, 3, 4],
      ['assets/almagest.webp'],
      ['Flutter', 'Laravel'],
      'https://github.com/AngelPereiraR/almagest'
    ),
  ];

  public selectedTechnologies: string[] = [];

  public get availableTechnologies(): string[] {
    const techs = new Set<string>();
    for (const project of this.projects) {
      for (const tech of project.technologies) {
        techs.add(tech);
      }
    }
    return Array.from(techs).sort();
  }

  public get filteredProjects(): Project[] {
    if (this.selectedTechnologies.length === 0) {
      return this.projects;
    }
    return this.projects.filter((project) =>
      project.technologies.some((tech) =>
        this.selectedTechnologies.includes(tech)
      )
    );
  }

  public toggleTechnology(tech: string): void {
    const index = this.selectedTechnologies.indexOf(tech);
    if (index >= 0) {
      this.selectedTechnologies.splice(index, 1);
    } else {
      this.selectedTechnologies.push(tech);
    }
  }

  public clearFilters(): void {
    this.selectedTechnologies = [];
  }
}
