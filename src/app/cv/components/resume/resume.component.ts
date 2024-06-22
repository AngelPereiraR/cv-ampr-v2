import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'cv-resume',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './resume.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeComponent implements OnInit {

  ngOnInit(): void { }

}
