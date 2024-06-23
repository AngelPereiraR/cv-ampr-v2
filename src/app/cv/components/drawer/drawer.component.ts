import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule],
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
