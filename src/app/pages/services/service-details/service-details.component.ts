import { Component, OnInit } from '@angular/core';
import { ServiceDetailDataService } from '../../../core/services/service-detail-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent implements OnInit {
  serviceContent: any;
  currentServiceId: number | undefined; // Track the currently selected service ID

  constructor(private serviceDetailDataService: ServiceDetailDataService,  private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // this.serviceContent = this.serviceDetailDataService.getServiceContent();
        // Get the ID from the route parameters
        const idParam = this.route.snapshot.paramMap.get('id');
        // Check if idParam is not null
        if (idParam) {
          const id = +idParam; // Convert to number
          this.currentServiceId = id; // Update the currently selected service ID
          // Fetch the service by its ID
        this.serviceContent = this.serviceDetailDataService.getServiceDetailById(id);
        } else {
          // Handle the case when idParam is null
          console.error('Service ID is null. Service not found!');
          // You can redirect or show a message if needed
        }    

        // Fetch the service by its ID
        // this.serviceContent = this.serviceDetailDataService.getServiceDetailById(id);
  }

    // Function to navigate to the details page
    goToServiceDetails(id: number) {
      this.currentServiceId = id; // Update the currently selected service ID
      this.serviceContent = this.serviceDetailDataService.getServiceDetailById(id);
    }
}
