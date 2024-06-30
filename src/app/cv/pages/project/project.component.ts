import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarGeneralComponent } from '../../components/navbar-general/navbar-general.component';
import { Project } from 'src/app/classes/project';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NavbarGeneralComponent, CarouselComponent],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [
    new Project(
      1,
      'FrutyFest',
      [
        'La página web del FrutyFest, un evento organizado por ByFruty, streamer de Twitch y YouTuber, ofrece información sobre las ediciones pasadas y futuras del evento.',
        'Presenta una tabla con los participantes seleccionados y un ranking basado en las puntuaciones obtenidas.',
        'Para participar, los usuarios deben registrarse y ser seleccionados por un administrador, quien también puede gestionar equipos y modos de juego en la base de datos.',
        'Durante el evento, los administradores califican cada modo de juego según las reglas establecidas.',
      ],
      ['assets/frutyfest.webp'],
      ['Angular', 'NestJS'],
      'https://github.com/AngelPereiraR/frutyfest-web',
      'https://frutyfest.netlify.app/'
    ),
    new Project(
      2,
      'Gestión Empresas',
      [
        'El proyecto es una aplicación que simplifica la gestión de catálogos para empresas y permite a los clientes hacer pedidos de forma interactiva.',
        'Para empresas, ofrece funciones de inicio de sesión y gestión de catálogo, visualización con filtros y gestión de sugerencias de clientes.',
        'Los clientes, tras registro y validación, exploran catálogos, gestionan un carrito, dan sugerencias y generan pedidos con confirmación adicional.',
        'El administrador controla la gestión de usuarios, datos de empresas, productos, categorías, sugerencias y pedidos, teniendo un control total sobre la aplicación.',
        'En resumen, mejora la interacción y eficiencia en la gestión de pedidos entre empresas y clientes.',
      ],
      [
        'assets/projects/gestion-empresas/01-login.webp',
        'assets/projects/gestion-empresas/02-companies.webp',
        'assets/projects/gestion-empresas/03-buy.webp',
        'assets/projects/gestion-empresas/04-suggestions.webp',
        'assets/projects/gestion-empresas/05-order.webp',
        'assets/projects/gestion-empresas/06-make-order.webp',
      ],
      ['Flutter', 'Java (Spring)'],
      'https://github.com/AngelPereiraR/frutyfest-web',
      'assets/gestion-empresas.apk'
    ),
    new Project(
      3,
      'SalesIn',
      [
        'Se trata de una página web que cuenta con un sistema de administración y usuarios.',
        'Los usuarios deben registrarse para acceder al contenido de la página.',
        'El administrador tiene la responsabilidad de agregar ofertas y artículos.',
        'Los usuarios pueden visualizar las ofertas disponibles y aplicar a ellas.',
        'Después de aplicar, tienen la opción de generar un PDF con las ofertas a las que han aplicado, el cual pueden enviar por correo electrónico o descargar directamente.',
      ],
      ['assets/salesin.webp'],
      ['Laravel']
    ),
    new Project(
      4,
      'GestionCursos',
      [
        'Es una página web que involucra a un administrador, profesores y alumnos.',
        'Los profesores tienen la capacidad de crear noticias y evaluar a los alumnos que están inscritos en sus asignaturas.',
        'Los alumnos pueden inscribirse en las asignaturas de cualquier profesor y visualizar las calificaciones correspondientes.',
      ],
      ['assets/gestioncursos.webp'],
      ['Java (Spring)'],
      'https://github.com/AngelPereiraR/gestioncursos'
    ),
    new Project(
      5,
      'Almagest',
      [
        'Es una aplicación móvil desarrollada en Flutter que permite a empresas mayoristas agregar productos a una base de datos y asignarles precios.',
        'Además, empresas minoristas pueden registrarse como usuarios para realizar pedidos a las empresas mayoristas.',
        'API de Laravel realizada por un profesor de DAM (Abandonado).',
        'Actualmente fuera de servicio.',
      ],
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
    console.log(this.selectedProject);
  }
}
