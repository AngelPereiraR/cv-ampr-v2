import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { NavbarGeneralComponent } from '../../components/navbar-general/navbar-general.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, NavbarGeneralComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  ngOnInit(): void {}
}
