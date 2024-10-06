import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

    // Define an array of carousel objects
    carouselItems = [
      {
        imgSrc: '../../../../assets/img/carousel-2.jpg',
        title: 'No 1 Cleaning Services',
        description: 'Your Hygienic Home Our Responsibility',
        btnText: 'Get Quote',
        btnLink: '#'
      },
      {
        imgSrc: 'http://www.samstissue.co.za/img/slider-bg.jpg',
        title: 'Soft, Strong, and Absorbent',
        description: 'Quality TISSUE for Everyday Comfort',
        btnText: 'Read More',
        btnLink: '#'
      },
      // Add more objects as needed
    ];

    public sendEmail(e: Event) {
      e.preventDefault();

      const form = (e.target as HTMLFormElement);

      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
  
      emailjs
        .sendForm(
          'service_xh31xpp', // Your Service ID
          'template_1kib7vg', // Your Template ID
          e.target as HTMLFormElement, 
          'f5NOhluWDieKNHfZE' // Your Public Key from EmailJS
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log('SUCCESS!', result.status, result.text);
            alert('Your inquiry has been sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('Failed to send your inquiry, please try again later.');
          }
        );
    }
}
