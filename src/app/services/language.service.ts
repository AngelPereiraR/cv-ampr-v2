import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public translocoService: TranslocoService;

  constructor(translocoService: TranslocoService) {
    this.translocoService = translocoService;
    this.initChangeLanguage();
  }

  public changeLanguage(language: string) {
    this.translocoService.setActiveLang(language);
    localStorage.setItem('language', language);
  }

  public initChangeLanguage() {
    this.translocoService.setActiveLang(
      localStorage.getItem('language') || 'es'
    );
  }
}
