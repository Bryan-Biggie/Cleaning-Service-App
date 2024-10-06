import { Component } from '@angular/core';

import {
  faCity,faGlassWaterDroplet, faBroom, faSpider, faWindowClose, faSprayCanSparkles, faHandsWash
} from '@fortawesome/free-solid-svg-icons';
import { faSprayCan, faToiletPaper } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faGlassWaterDroplet = faGlassWaterDroplet;
  faBroom=faBroom;
  faWindowClose=faWindowClose;
  faSprayCanSparkles=faSprayCanSparkles;
  faHandsWash=faHandsWash;
  faSprayCan = faSprayCan;
  faToiletPaper = faToiletPaper;
}
