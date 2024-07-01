import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'cv-home',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
}
