import { Component } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css'
})
export class FaqSectionComponent {
  activeFaqIndex: number | null = null; // Track the active FAQ index

    // Define an array of FAQ items
    faqItems: FaqItem[] = [
      {
        question: 'What types of cleaning services do you offer?',
        answer: 'We offer a wide range of services including office cleaning, home cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and window cleaning.'
      },
      {
        question: 'Do I need to be home during the cleaning service?',
        answer: 'It’s not necessary for you to be home during the cleaning, but you are welcome to be present. We’ll work around your schedule and make sure everything is cleaned to your satisfaction.'
      },
      {
        question: 'What cleaning products do you use?',
        answer: 'We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. If you have specific preferences, feel free to let us know.'
      },
      {
        question: 'How much do your cleaning services cost?',
        answer: 'The cost of our services depends on the size of the space, the type of service required, and the frequency of the cleaning. Contact us for a free quote tailored to your specific needs.'
      },
      {
        question: 'Do you offer one-time cleaning services?',
        answer: 'Yes, we offer both one-time and recurring cleaning services. Whether you need a single deep clean or regular cleaning, we’re here to help.'
      },
      {
        question: 'Are your cleaners insured and background checked?',
        answer: 'Yes, all of our cleaners are fully insured and go through thorough background checks to ensure your safety and peace of mind.'
      },
      {
        question: 'What happens if something is damaged during the cleaning?',
        answer: 'We take great care while cleaning your property. However, if something does get damaged, we are fully insured and will work with you to resolve the situation quickly.'
      },
      {
        question: 'Can I reschedule or cancel a cleaning appointment?',
        answer: 'Yes, you can reschedule or cancel your appointment. We kindly ask that you provide at least 24 hours’ notice for any changes to avoid any cancellation fees.'
      },
      {
        question: 'Do you provide cleaning supplies and equipment?',
        answer: 'Yes, we bring all necessary cleaning supplies and equipment to each job. If you have any specific requests for cleaning products, just let us know.'
      },
      {
        question: 'How do I book a cleaning service?',
        answer: 'Booking with us is easy! You can either give us a call, send us an email, or use the “Get Quote” button on our website to schedule your service.'
      }
    ];
    
  toggleFaq(index: number): void {
    // Toggle the active state for the clicked FAQ item
    this.activeFaqIndex = this.activeFaqIndex === index ? null : index;
  }

}
