import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarGeneralComponent } from '../../components/navbar-general/navbar-general.component';
import { TranslocoModule } from '@jsverse/transloco';
import { Project } from '../../../classes/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarGeneralComponent, TranslocoModule],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex flex-col flex-1' },
})
export class ProjectsComponent {
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

  public selectedTechnologies: string[] = [];
  public activeService: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    cdr: ChangeDetectorRef
  ) {
    route.queryParams.subscribe((params) => {
      const service = params['service'];
      this.activeService =
        service && this.availableServices.includes(service) ? service : null;
      this.selectedTechnologies = [];
      cdr.markForCheck();
    });
  }

  public get availableTechnologies(): string[] {
    const techs = new Set<string>();
    const service = this.activeService;
    const filtered = service
      ? this.projects.filter((p) => p.services.includes(service))
      : this.projects;
    for (const project of filtered) {
      for (const tech of project.technologies) {
        techs.add(tech);
      }
    }
    return Array.from(techs).sort();
  }

  public get availableServices(): string[] {
    const services = new Set<string>();
    for (const project of this.projects) {
      for (const service of project.services) {
        services.add(service);
      }
    }
    return Array.from(services);
  }

  public get filteredProjects(): Project[] {
    return this.projects.filter((project) => {
      if (
        this.activeService &&
        !project.services.includes(this.activeService)
      ) {
        return false;
      }
      if (
        this.selectedTechnologies.length > 0 &&
        !project.technologies.some((tech) =>
          this.selectedTechnologies.includes(tech)
        )
      ) {
        return false;
      }
      return true;
    });
  }

  public toggleTechnology(tech: string): void {
    const index = this.selectedTechnologies.indexOf(tech);
    if (index >= 0) {
      this.selectedTechnologies.splice(index, 1);
    } else {
      this.selectedTechnologies.push(tech);
    }
  }

  public setService(service: string | null): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: service ? { service } : undefined,
    });
  }

  public clearFilters(): void {
    this.selectedTechnologies = [];
  }
}
