import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceDetailDataService } from '../../core/services/service-detail-data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent implements OnInit {
  constructor(private serviceDetailDataService: ServiceDetailDataService) {}

  teamMembers: any[] = []

  ngOnInit() {
    this.teamMembers = this.serviceDetailDataService.getTeamMembers();
  }


}
