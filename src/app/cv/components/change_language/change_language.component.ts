import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'change-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change_language.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeLanguageComponent implements OnInit {
  ngOnInit(): void {}
}
