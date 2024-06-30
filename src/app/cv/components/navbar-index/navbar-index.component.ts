import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-navbar-index',
  standalone: true,
  templateUrl: './navbar-index.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CommonModule, DrawerComponent],
})
export class NavbarIndexComponent implements OnInit {
  ngOnInit(): void {}
}
