import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCity,faGlassWaterDroplet, faBroom, faSpider, faWindowClose, faSprayCanSparkles, faHandsWash
} from '@fortawesome/free-solid-svg-icons';
import { ServiceDetailDataService } from '../../../core/services/service-detail-data.service';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

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

  constructor(private serviceDetailDataService: ServiceDetailDataService,  private router: Router) {}
  services: Service[] = [
    {
      id: 1,
      title: 'Office Cleaning',
      description: 'We offer comprehensive office cleaning services, ensuring a tidy and professional environment that boosts productivity and impresses clients.',
      icon: 'bi bi-building'
    },
    {
      id: 2,
      title: 'Home Cleaning',
      description: 'Our team provides exceptional home cleaning services, tailored to fit your schedule and specific needs, leaving your home spotless and refreshed.',
      icon: 'bi bi-house-door'
    },
    {
      id: 3,
      title: 'Deep Cleaning',
      description: 'Our deep cleaning service is perfect for those looking to remove tough dirt and grime, focusing on areas that are often overlooked.',
      icon: 'bi bi-droplet'
    },
    {
      id: 4,
      title: 'Move-In/Move-Out Cleaning',
      description: 'We handle the hassle of cleaning during your move. Whether you’re moving in or out, we ensure your property is pristine and ready for its next chapter.',
      icon: 'bi bi-box-seam'
    },
    {
      id: 5,
      title: 'Post-Construction Cleaning',
      description: 'Our post-construction cleaning service takes care of the dust and debris left behind after a renovation, leaving your new space ready for use.',
      icon: 'bi bi-hammer'
    },
    {
      id: 6,
      title: 'Window Cleaning',
      description: 'We offer professional window cleaning services, ensuring that your windows are sparkling clean and free from streaks or smudges.',
      icon: 'bi bi-microsoft'
    }
  ];
  
    // Function to navigate to the details page
    goToServiceDetails(id: number) {
      this.router.navigate(['/services', id]);
    }
}
