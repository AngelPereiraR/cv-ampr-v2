import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';
import { ChangeLanguageComponent } from '../change_language/change_language.component';

@Component({
  selector: 'app-navbar-general',
  standalone: true,
  templateUrl: './navbar-general.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DrawerComponent, ChangeLanguageComponent],
})
export class NavbarGeneralComponent implements OnInit {
  ngOnInit(): void {}
}
