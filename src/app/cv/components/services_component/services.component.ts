import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'cv-services',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './services.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements OnInit {

  ngOnInit(): void { }

}
