import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './cv/components/footer/footer.component';
import { NavbarIndexComponent } from './cv/components/navbar-index/navbar-index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FooterComponent, NavbarIndexComponent],
})
export class AppComponent {
  title = 'cv-ampr-v2';
}
