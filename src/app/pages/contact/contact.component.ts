import { Component } from '@angular/core';

import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope, faArrowLeftRotate, faShare
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn, faYoutube
} from '@fortawesome/free-brands-svg-icons';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faArrowLeftRotate = faArrowLeftRotate;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faYoutube = faYoutube;
  faShare = faShare;

  public sendEmail(e: Event) {
    e.preventDefault();

    const form = (e.target as HTMLFormElement);

    // Check for validity
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    emailjs
      .sendForm(
        'service_xh31xpp', // Your Service ID
        'template_e7i0z7h', // Your Template ID
        form, 
        'f5NOhluWDieKNHfZE' // Your Public Key from EmailJS
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.status, result.text);
          alert('Your message has been sent successfully!');
          form.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send your message, please try again later.');
        }
      );
  }
}
