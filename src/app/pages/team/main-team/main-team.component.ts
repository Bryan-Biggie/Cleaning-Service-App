import { Component, OnInit } from '@angular/core';

import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { ServiceDetailDataService } from '../../../core/services/service-detail-data.service';

@Component({
  selector: 'app-main-team',
  templateUrl: './main-team.component.html',
  styleUrl: './main-team.component.css'
})
export class MainTeamComponent implements OnInit {
  constructor(private serviceDetailDataService: ServiceDetailDataService) {}

  teamMembers: any[] = []

  ngOnInit() {
    this.teamMembers = this.serviceDetailDataService.getTeamMembers().slice(0, 4);
  }

}
