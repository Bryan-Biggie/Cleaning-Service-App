import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailDataService {
  serviceDetails: any[] = [
    {
      id: 1,
      imgSrc: 'https://www.forbes.com/advisor/wp-content/uploads/2022/02/How_To_Start_A_Cleaning_Business_-_article_image.jpg',  // Replace with relevant image
      title: 'Comprehensive Office Cleaning Services',
      paragraphs: [
        `Our office cleaning services are designed to create a spotless and professional environment, ensuring your workspace is always clean and presentable. We focus on all areas of your office, from desks and common areas to bathrooms and breakrooms.`,
        `Our cleaning team uses high-quality, eco-friendly products to provide a safe and clean workspace for your employees and visitors. We tailor our services to meet your specific needs and can work around your business schedule.`,
        `Whether you need daily, weekly, or one-time deep cleaning services, we guarantee a top-notch service with attention to detail. We understand that a clean office improves employee productivity and leaves a great impression on clients.`
      ],
      listItems: [
        'Thorough cleaning of workspaces, meeting rooms, and common areas.',
        'Restroom sanitation and replenishment of supplies.',
        'Customizable cleaning schedules to fit your business hours.',
      ],
    },
    {
      id: 2,
      imgSrc: 'https://www.forbes.com/advisor/wp-content/uploads/2022/02/How_To_Start_A_Cleaning_Business_-_article_image.jpg',  // Replace with relevant image
      title: 'Professional Home Cleaning Services',
      paragraphs: [
        `We offer personalized home cleaning services to help you maintain a sparkling clean and healthy living space. Whether you need regular upkeep or a one-time deep clean, our team has you covered.`,
        `Our home cleaning includes dusting, vacuuming, bathroom cleaning, kitchen cleaning, and more, ensuring every corner of your home is fresh and tidy.`,
        `We use safe, eco-friendly products to provide a thorough clean while protecting your home’s surfaces. You can rely on us for flexible scheduling and excellent customer service.`
      ],
      listItems: [
        'Regular and deep home cleaning options available.',
        'Use of eco-friendly cleaning products.',
        'Flexible scheduling to fit your lifestyle.',
      ],
    },
    {
      id: 3,
      imgSrc: 'https://www.forbes.com/advisor/wp-content/uploads/2022/02/How_To_Start_A_Cleaning_Business_-_article_image.jpg',  // Replace with relevant image
      title: 'Deep Cleaning for Homes and Offices',
      paragraphs: [
        `Our deep cleaning service is ideal for clients looking to tackle hard-to-reach spots and thoroughly clean areas that are often overlooked. This service is perfect for annual cleanings, seasonal refreshes, or as part of a regular cleaning plan.`,
        `We scrub, sanitize, and disinfect all areas, including carpets, upholstery, baseboards, windows, and more, ensuring your space is not only clean but also healthier for occupants.`,
        `Our team comes equipped with advanced tools and products to provide a deep clean that eliminates built-up dirt, dust, and grime.`
      ],
      listItems: [
        'Complete cleaning of high-touch areas and hidden corners.',
        'Detailed cleaning of floors, windows, and surfaces.',
        'Ideal for homes, offices, and post-renovation projects.',
      ],
    },
    {
      id: 4,
      imgSrc: 'https://www.forbes.com/advisor/wp-content/uploads/2022/02/How_To_Start_A_Cleaning_Business_-_article_image.jpg',  // Replace with relevant image
      title: 'Move-In and Move-Out Cleaning Services',
      paragraphs: [
        `Moving is already stressful enough—let us handle the cleaning! Whether you’re moving into a new space or preparing to leave, our move-in/move-out cleaning service ensures the property is spotless and ready for its next occupants.`,
        `We clean all areas, including kitchens, bathrooms, floors, and storage spaces, so you can focus on your move. Our team follows a detailed checklist to ensure every room is cleaned thoroughly.`,
        `Leave the heavy lifting to us, and enjoy a smooth, worry-free transition to your new home or office.`
      ],
      listItems: [
        'Full property cleaning before or after moving.',
        'Cleaning of appliances, cabinets, and bathrooms.',
        'Guaranteed satisfaction for property owners and renters.',
      ],
    },
    {
      id: 5,
      imgSrc: 'https://www.forbes.com/advisor/wp-content/uploads/2022/02/How_To_Start_A_Cleaning_Business_-_article_image.jpg',  // Replace with relevant image
      title: 'Post-Construction Cleaning',
      paragraphs: [
        `After construction or renovation, there’s often a lot of dust and debris left behind. Our post-construction cleaning service is designed to get rid of this mess, leaving your space ready for use.`,
        `We remove dust, clean windows, scrub floors, and make sure all surfaces are free from dirt and construction residue. We understand the importance of making your space look polished and finished after construction.`,
        `Our team is skilled at handling cleaning for all types of construction projects, ensuring that your new or renovated space shines.`
      ],
      listItems: [
        'Removal of dust and debris from construction areas.',
        'Cleaning of floors, windows, and walls.',
        'Detail-oriented service to prepare your space for use.',
      ],
    },
    {
      id: 6,
      imgSrc: 'https://www.forbes.com/advisor/wp-content/uploads/2022/02/How_To_Start_A_Cleaning_Business_-_article_image.jpg',  // Replace with relevant image
      title: 'Professional Window Cleaning',
      paragraphs: [
        `Our window cleaning services ensure your windows are crystal clear and free of streaks. We provide cleaning for both residential and commercial properties.`,
        `Using specialized tools and techniques, we clean your windows inside and out, improving your view and the overall appearance of your space.`,
        `No window is too high or too difficult for our experienced team. We offer flexible scheduling to accommodate your needs, whether you require regular cleanings or a one-time service.`
      ],
      listItems: [
        'Inside and outside window cleaning.',
        'Use of professional, streak-free cleaning products.',
        'Safe and efficient service for all building types.',
      ],
    },
  ];

  teamMembers = [
    {
      id: 1,
      name: 'Walter White',
      position: 'Chief Executive Officer',
      description: 'Walter oversees all aspects of CleanEase, ensuring the highest standards of service and customer satisfaction. With over 10 years of experience in the cleaning industry, he is dedicated to growing the company and maintaining its excellent reputation.',
      image: 'assets/img/team-4.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      description: 'Sarah manages the daily operations at CleanEase, ensuring that every team is equipped and ready to provide top-tier cleaning services. She has a keen eye for detail and a passion for customer service.',
      image: 'assets/img/team-2.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'William Anderson',
      position: 'Head of Marketing',
      description: 'William drives the marketing efforts at CleanEase, working to expand the company’s reach and attract new clients. His strategic approach has helped position CleanEase as a leader in the cleaning service industry.',
      image: 'assets/img/team-3.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Amanda Jepson',
      position: 'Customer Support Manager',
      description: 'Amanda leads the customer support team, ensuring that all client queries and issues are resolved quickly and efficiently. Her dedication to customer satisfaction helps CleanEase maintain strong client relationships.',
      image: 'assets/img/team-4.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Brian Doe',
      position: 'Team Leader - Cleaning Services',
      description: 'Brian supervises cleaning crews on-site, ensuring that CleanEase’s high standards are consistently met. With his leadership, the cleaning teams deliver thorough and efficient services.',
      image: 'assets/img/team-2.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Josepha Palas',
      position: 'Finance Manager',
      description: 'Josepha handles all financial aspects of CleanEase, including budgeting, payroll, and financial planning. Her expertise keeps the business running smoothly and profitably.',
      image: 'assets/img/team-3.jpg',
      social: {
        twitter: '#',
        facebook: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];
  
  

  constructor() { }
  getServices() {
    return this.serviceDetails;
  }
  getTeamMembers() {
    return this.teamMembers;
  }

  

  // Method to get a service by ID
  getServiceDetailById(id: number) {
    return this.serviceDetails.find(service => service.id === id);
  }

}
