import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarGeneralComponent } from '../../components/navbar-general/navbar-general.component';
import { Project } from 'src/app/classes/project';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    NavbarGeneralComponent,
    CarouselComponent,
    TranslocoModule,
  ],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [
    new Project(
      1,
      'FrutyFest',
      [1, 2, 3, 4],
      ['assets/frutyfest.webp'],
      ['Angular', 'NestJS'],
      'https://github.com/AngelPereiraR/frutyfest-web',
      'https://project-frutyfest.netlify.app/'
    ),
    new Project(
      2,
      'Dulce Blog',
      [1, 2, 3, 4],
      ['assets/dulceblog.webp'],
      ['Angular', 'ExpressJS'],
      'https://github.com/AngelPereiraR/dulce_blog_web',
      'https://dulce-blog.netlify.app/'
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

  public selectedProject: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.selectedProject = this.projects.find((project) => project.id === id);
    });
  }
}
