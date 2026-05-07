import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'cv-services',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  constructor(private router: Router) {}

  public goToProjects(service: string): void {
    this.router.navigate(['/projects'], {
      queryParams: { service },
    });
  }
}
