import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { NavbarGeneralComponent } from '../../components/navbar-general/navbar-general.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarGeneralComponent, TranslocoModule],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  ngOnInit(): void {}
}
