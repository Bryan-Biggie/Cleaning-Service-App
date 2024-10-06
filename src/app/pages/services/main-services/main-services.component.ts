import { Component } from '@angular/core';
import {
  faCity,faGlassWaterDroplet, faBroom, faSpider, faWindowClose, faSprayCanSparkles, faHandsWash
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-services',
  templateUrl: './main-services.component.html',
  styleUrl: './main-services.component.css'
})
export class MainServicesComponent {
  faGlassWaterDroplet = faGlassWaterDroplet;
  faBroom=faBroom;
  faWindowClose=faWindowClose;
  faSprayCanSparkles=faSprayCanSparkles;
  faHandsWash=faHandsWash;

}
