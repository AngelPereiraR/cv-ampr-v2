import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './drawer.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DrawerComponent implements OnInit {
  ngOnInit(): void {}
  isOpen = false;

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }
}
