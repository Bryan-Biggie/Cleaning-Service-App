import { Component } from '@angular/core';

import {
  faStar, faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  clientName: string;
  profession: string;
  message: string;
  imageUrl: string;
  rating: number;
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent {
  faStar = faStar;
  faQuoteLeft = faQuoteLeft;

  // swiperBreakpoints = {
  //   0: { slidesPerView: 1 },
  //   768: { slidesPerView: 2 },
  //   992: { slidesPerView: 2 },
  //   1200: { slidesPerView: 3 }
  // };

  testimonials: Testimonial[] = [
    {
      clientName: 'Sarah Johnson',
      profession: 'Busy Mom',
      message: 'CleanEase transformed my home! The team was punctual, thorough, and paid attention to every detail. I can finally relax in my clean space!',
      imageUrl: '../../../assets/img/testimonial-1.jpg',
      rating: 5,
    },
    {
      clientName: 'Michael Smith',
      profession: 'Business Owner',
      message: 'I use CleanEase for my office cleaning, and they never disappoint. The service is reliable, and my workspace has never looked better!',
      imageUrl: '../../../assets/img/testimonial-2.jpg',
      rating: 4,
    },
    {
      clientName: 'Emily Brown',
      profession: 'Student',
      message: 'As a student, I don’t have much time for cleaning. CleanEase made it easy for me to keep my apartment tidy. Highly recommend their service!',
      imageUrl: '../../../assets/img/testimonial-3.jpg',
      rating: 5,
    },
    {
      clientName: 'David Wilson',
      profession: 'Retired Veteran',
      message: 'The team at CleanEase was respectful and efficient. They cleaned my home with care, and I appreciated their professionalism. Will definitely book again!',
      imageUrl: '../../../assets/img/testimonial-4.jpg',
      rating: 5,
    },
  ];
  
  

  swiperBreakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

}
