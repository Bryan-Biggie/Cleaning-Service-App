import { Component } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

      ngOnInit(): void {
        AOS.init()
      }
}
