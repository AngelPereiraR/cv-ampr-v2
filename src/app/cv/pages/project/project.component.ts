import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NavbarGeneralComponent } from '../../components/navbar-general/navbar-general.component';
import { Project } from '../../../classes/project';
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
  host: { class: 'flex flex-col flex-1' },
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [
    new Project(
      1,
      'OptiCV',
      [1, 2, 3, 4],
      ['assets/opticv.webp'],
      ['Python', 'React', 'FastAPI', 'TailwindCSS', 'Docker'],
      ['backend', 'frontend', 'ai'],
      'https://github.com/AngelPereiraR/IABD_PIA/tree/main/Tema%2004/Fast%20API/Recopilador%20Ofertas%20Trabajo%20Validas',
      'https://opticv-frontend.vercel.app/'
    ),
    new Project(
      2,
      'InvesVault',
      [1, 2, 3, 4],
      ['assets/invesvault.webp'],
      ['Express.js', 'Flutter'],
      ['backend', 'mobile'],
      'https://github.com/AngelPereiraR/InvesVault_App',
      'assets/invesvault-v1.0.12.apk'
    ),
    new Project(
      3,
      'OCR',
      [1, 2, 3, 4],
      ['assets/ocr.webp'],
      ['Python'],
      ['ai'],
      undefined,
      undefined,
      'assets/ocr.pdf'
    ),
    new Project(
      4,
      'Dulce Blog',
      [1, 2, 3, 4],
      ['assets/dulceblog.webp'],
      ['Angular', 'ExpressJS'],
      ['backend', 'frontend'],
      'https://github.com/AngelPereiraR/dulce_blog_web',
      'https://dulce-blog.netlify.app/'
    ),
    new Project(
      5,
      'FrutyFest',
      [1, 2, 3, 4],
      ['assets/frutyfest.webp'],
      ['Angular', 'NestJS'],
      ['backend', 'frontend'],
      'https://github.com/AngelPereiraR/frutyfest-web',
      'https://project-frutyfest.netlify.app/'
    ),
    new Project(
      6,
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
      ['backend', 'mobile'],
      'https://github.com/AngelPereiraR/business_management_frontend',
      'assets/gestion-empresas.apk'
    ),
    new Project(
      7,
      'SalesIn',
      [1, 2, 3, 4, 5],
      ['assets/salesin.webp'],
      ['Laravel'],
      ['backend', 'frontend']
    ),
    new Project(
      8,
      'GestionCursos',
      [1, 2, 3],
      ['assets/gestioncursos.webp'],
      ['Java (Spring)'],
      ['backend', 'frontend'],
      'https://github.com/AngelPereiraR/gestioncursos'
    ),
    new Project(
      9,
      'Almagest',
      [1, 2, 3, 4],
      ['assets/almagest.webp'],
      ['Flutter', 'Laravel'],
      ['backend', 'mobile'],
      'https://github.com/AngelPereiraR/almagest'
    ),
  ];

  public selectedProject: Project | undefined;
  public pdfSafeUrl: SafeResourceUrl | null = null;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.selectedProject = this.projects.find(
        (project) => project.id === id
      );
      this.pdfSafeUrl = this.selectedProject?.pdfUrl
        ? this.sanitizer.bypassSecurityTrustResourceUrl(
            this.selectedProject.pdfUrl
          )
        : null;
    });
  }
}
