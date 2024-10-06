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
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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
