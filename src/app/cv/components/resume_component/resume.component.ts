import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'cv-resume',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './resume.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent implements OnInit {
  public aboutSelected: boolean = true;
  public experienceSelected: boolean = false;
  public educationSelected: boolean = false;
  public skillsSelected: boolean = false;

  ngOnInit(): void {}

  public toggleAbout(): void {
    this.aboutSelected = true;
    this.experienceSelected = false;
    this.educationSelected = false;
    this.skillsSelected = false;
  }

  public toggleExperience(): void {
    this.aboutSelected = false;
    this.experienceSelected = true;
    this.educationSelected = false;
    this.skillsSelected = false;
  }

  public toggleEducation(): void {
    this.aboutSelected = false;
    this.experienceSelected = false;
    this.educationSelected = true;
    this.skillsSelected = false;
  }

  public toggleSkills(): void {
    this.aboutSelected = false;
    this.experienceSelected = false;
    this.educationSelected = false;
    this.skillsSelected = true;
  }
}
