import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'cv-about',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {}
}
