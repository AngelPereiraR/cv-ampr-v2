import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'change-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change_language.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeLanguageComponent implements OnInit {
  ngOnInit(): void {}

  public languageService: LanguageService;

  constructor(languageService: LanguageService) {
    this.languageService = languageService;
  }

  public changeLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }
}
