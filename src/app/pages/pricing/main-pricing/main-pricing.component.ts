import { Component } from '@angular/core';
import {
  faXmark, faCheck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-pricing',
  templateUrl: './main-pricing.component.html',
  styleUrl: './main-pricing.component.css'
})
export class MainPricingComponent {

  faXmark = faXmark;
  faCheck = faCheck;
}
