import { Component } from '@angular/core';
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


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cleaning-service-project';
      // FontAwesome icons
      faMapMarkerAlt = faMapMarkerAlt;
      faPhone = faPhone;
      faEnvelope = faEnvelope;
      faSearch = faSearch;
      faFacebookF = faFacebookF;
      faTwitter = faTwitter;
      faInstagram = faInstagram;
      faLinkedinIn = faLinkedinIn;
      isCollapsed = true; // Initial state for navbar collapse
}
