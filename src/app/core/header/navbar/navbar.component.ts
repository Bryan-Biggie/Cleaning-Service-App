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
isMenuOpen = false;  // Initially, the menu is closed 

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;

  // Add/remove the "open" class for the navbar links
  const navbarLinks = document.querySelector('.navbar-links');
  if (navbarLinks) {
    navbarLinks.classList.toggle('open', this.isMenuOpen);
  }

  // Add/remove the "is-active" class for the nav-trigger button
  const navTrigger = document.querySelector('.nav-trigger');
  if (navTrigger) {
    navTrigger.classList.toggle('is-active', this.isMenuOpen);
  }
}

}
