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
  selector: 'app-main-team',
  templateUrl: './main-team.component.html',
  styleUrl: './main-team.component.css'
})
export class MainTeamComponent {
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faSearch = faSearch;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;

  teamMembers = [
    {
      name: 'John Doe',
      designation: 'Operations Manager',
      img: 'assets/img/team-2.jpg',
      social: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe'
      }
    },
    {
      name: 'Jane Smith',
      designation: 'Cleaning Supervisor',
      img: 'assets/img/team-2.jpg',
      social: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith'
      }
    },
    {
      name: 'Michael Johnson',
      designation: 'Customer Service Manager',
      img: 'assets/img/team-3.jpg',
      social: {
        facebook: 'https://facebook.com/michaeljohnson',
        twitter: 'https://twitter.com/michaeljohnson',
        instagram: 'https://instagram.com/michaeljohnson',
        linkedin: 'https://linkedin.com/in/michaeljohnson'
      }
    },
    {
      name: 'Emily Davis',
      designation: 'Lead Cleaner',
      img: 'assets/img/team-4.jpg',
      social: {
        facebook: 'https://facebook.com/emilydavis',
        twitter: 'https://twitter.com/emilydavis',
        instagram: 'https://instagram.com/emilydavis',
        linkedin: 'https://linkedin.com/in/emilydavis'
      }
    }
  ];

}
