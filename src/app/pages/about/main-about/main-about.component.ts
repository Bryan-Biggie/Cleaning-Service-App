import { Component } from '@angular/core';
import {
  faCity,faSchool, faWarehouse, faHospital
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main-about',
  templateUrl: './main-about.component.html',
  styleUrl: './main-about.component.css'
})
export class MainAboutComponent {
  faCity = faCity;
  faSchool=faSchool;
  faWarehouse=faWarehouse;
  faHospital = faHospital;


}
