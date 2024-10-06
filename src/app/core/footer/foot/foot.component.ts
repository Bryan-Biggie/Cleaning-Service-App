import { Component ,HostListener } from '@angular/core';

import {
  faCheck,  faMapMarkerAlt,
  faPhone,
  faEnvelope, faArrowAltCircleUp
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn, faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('0.5s ease-in')]),
      transition('visible => hidden', [animate('0.5s ease-out')])
    ])
  ]
})
export class FootComponent {

      // FontAwesome icons
      faFacebookF = faFacebookF;
      faTwitter = faTwitter;
      faInstagram = faInstagram;
      faLinkedinIn = faLinkedinIn;
      faYoutube = faYoutube;
      faArrowAltCircleUp = faArrowAltCircleUp;
    

      faCheck = faCheck;
          faMapMarkerAlt = faMapMarkerAlt;
    faPhone = faPhone;
    faEnvelope = faEnvelope;

    showButton = false;

    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      this.showButton = window.scrollY > 300; // Show button after scrolling 300px
    }
  
    scrollToTop() {
      document.documentElement.scrollIntoView({ behavior: 'smooth' });
    }

}
