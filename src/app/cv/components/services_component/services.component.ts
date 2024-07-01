import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'cv-services',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements OnInit {
  ngOnInit(): void {}
}
