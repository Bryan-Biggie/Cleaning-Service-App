import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceDetailDataService } from '../../../core/services/service-detail-data.service';
import AOS from 'aos';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // You can use the icon class directly here
}

@Component({
  selector: 'app-main2-services',
  templateUrl: './main2-services.component.html',
  styleUrl: './main2-services.component.css'
})
export class Main2ServicesComponent implements OnInit{

  constructor(private serviceDetailDataService: ServiceDetailDataService,  private router: Router) {}
  ngOnInit(): void {
    AOS.init()
  }
  // services: Service[] = [
  //   {
  //     id: 1,
  //     title: 'Lorem Ipsum',
  //     description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
  //     icon: 'bi bi-briefcase'
  //   },
  //   {
  //     id: 2,
  //     title: 'Dolor Sitema',
  //     description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
  //     icon: 'bi bi-card-checklist'
  //   },
  //   {
  //     id: 3,
  //     title: 'Sed ut perspiciatis',
  //     description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
  //     icon: 'bi bi-bar-chart'
  //   },
  //   {
  //     id: 4,
  //     title: 'Magni Dolores',
  //     description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  //     icon: 'bi bi-binoculars'
  //   },
  //   {
  //     id: 5,
  //     title: 'Nemo Enim',
  //     description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
  //     icon: 'bi bi-brightness-high'
  //   },
  //   {
  //     id: 6,
  //     title: 'Eiusmod Tempor',
  //     description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
  //     icon: 'bi bi-calendar4-week'
  //   }
  // ];

    // Function to navigate to the details page
    goToServiceDetails(id: number) {
      this.router.navigate(['/services', id]);
    }
}
