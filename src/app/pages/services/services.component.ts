import { Component } from '@angular/core';

interface CleaningService {
  title: string;
  description: string[]; // Changed to an array of strings
  servicesIncluded: string[];
  image: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  cleaningServices: CleaningService[] = [
    {
        title: 'Regular Home Cleaning',
        description: [
          'Our regular home cleaning service is designed to keep your home spotless and inviting. We offer flexible scheduling tailored to your needs, ensuring we work around your busy lifestyle. Our service is perfect for families or individuals who want to enjoy a clean home without the stress of maintaining it themselves.',
          
          'What Is a Regular House Cleaning Service? We tailor all our regular house cleaning services to match exactly what you and your family need. Whether you require weekly cleaning services or prefer monthly visits, we’ve got you covered. We work hard to deliver a high-quality service that allows you to feel joy walking through the front door, enhancing your overall quality of life. Our regular house cleaning services are expertly designed to match your needs, preferences, and budget. Some benefits of scheduling regular house cleaning services include:',
          
          '✨ Allows you to spend more time with family and friends.',
          '✨ Reduces allergy symptoms by decreasing dust and other allergens in your home.',
          '✨ Provides more time for other things on your to-do list.',
          '✨ Reduces the risk of set-in stains from food, hard water, or mold.',
          '✨ Eases stress when unexpected visits from family, neighbors, or friends occur.',
          '✨ Lessens the physical strain of cleaning on your hands and knees.',
          '✨ Establishes trust with a consistent cleaning professional.',
          '✨ Results in fewer traces of viruses and bacteria in your home.',
      
          'Cleaning Wherever You Call Home: The cleaning professionals at our company have years of experience thoroughly cleaning various types of homes, including apartments, condos, primary residences, vacation homes, Airbnb rentals, and more!',
      
          'How Much Do Regular Home Cleaning Services Cost? We strive to make our professional cleaning services available for any budget. We proudly offer a wide range of services, with many affordable options customized to your unique needs and personal preferences. The cost of our cleaning services depends on the size of your home and the specific cleaning tasks you would like completed.',
      
          'Recurring Cleaning Options: We understand that every home is unique, which is why we offer several regular house cleaning service options to fit the activity level of your home:',
          
          '- **Weekly Cleaning Service** – Ideal for busy homes with large families. Save hours each week by hiring our professionals to tidy your home thoroughly. Our weekly service is flexible, allowing adjustments as needed.',
          '- **Bi-Weekly Cleaning Service** – Having cleaning professionals visit every two weeks is a great way to maintain a tidy home. Many customers choose this service for ongoing upkeep. Adjustments to your schedule can be made with ease.',
          '- **Monthly Cleaning Service** – Your home deserves a thorough cleaning at least once a month. We’ll tackle accumulated dust, germs, and allergens so you can focus on bigger tasks. If you need an extra cleaning in between, we’ll happily accommodate you.',
      
          'Contact Us Today for Regular Home Cleaning Solutions: You can count on our cleaning professionals to handle all the dusting, mopping, vacuuming, and sanitizing in your home. Whatever your regular house cleaning needs, we’ll create the perfect plan for your schedule and home activity level. We honor a Neighborly Done Right Promise™, meaning if you’re not satisfied with any part of our cleaning, you can contact us by the end of the next business day, and we’ll return to re-clean it at no extra cost.',
          
          'With years of experience providing exceptional cleaning services to homeowners, we’re here to help. We’re happy to answer any questions, whether you’re curious about our services or want an estimate for cleaning costs. Contact our team today to request an estimate for professional cleaning services!'
      ],
      
        servicesIncluded: [
            '✔️ Vacuuming and Dusting',
            '✔️ Bathroom Sanitation',
            '✔️ Kitchen Cleaning',
            '✔️ Floor Mopping',
            '✔️ Surface Disinfection',
        ],
        image: 'https://locallyfied.com/wp-content/uploads/2024/06/The-Benefits-of-Regular-Home-Cleaning-Services-Why-Hiring-a-Professional-Cleaner-is-Worth-It-900x500.jpg',
    },
    {
        title: 'Window Cleaning',
        description: [
          'We provide professional window cleaning services that ensure your windows shine and are free from streaks. Our trained staff employs the best techniques and eco-friendly cleaning products to achieve a crystal-clear finish, leaving your windows sparkling and enhancing the overall appearance of your home. We understand that clean windows not only improve aesthetics but also allow more natural light to flow into your space, creating a warm and inviting atmosphere.',
          
          'Our window cleaning services are comprehensive and tailored to meet your needs. In addition to interior window cleaning, we offer exterior window services that remove dirt, grime, and other contaminants that accumulate over time. Our skilled team is equipped to handle even the most challenging cleaning tasks, including screen cleaning to remove dust and pollen buildup, and hard-to-reach window cleaning for those tricky spots that require extra care. We utilize ladders, extension poles, and other specialized equipment to ensure every part of your home is immaculate, regardless of height or accessibility.',
          
          'With our window cleaning services, you can enjoy unobstructed views and a brighter home filled with natural light. Regularly cleaning your windows not only enhances your home’s curb appeal but also prolongs the life of your window fixtures by preventing the buildup of harmful contaminants. Say goodbye to streaks, smudges, and hard water stains, and experience the difference a professional window cleaning can make. Trust us to restore the clarity of your windows, providing you with a clear view of the world outside and creating a more uplifting living environment for you and your family.',
          
          'Additionally, we prioritize customer satisfaction and safety, ensuring our team adheres to all safety regulations while working on your property. Whether you need a one-time cleaning or are looking to establish a regular cleaning schedule, we are here to meet your needs with our exceptional service. Let us take care of your window cleaning so you can enjoy the beautiful views without the hassle!'
      ],
      
        servicesIncluded: [
            '✔️ Interior Window Cleaning',
            '✔️ Exterior Window Cleaning',
            '✔️ Screen Cleaning',
            '✔️ Hard-to-Reach Windows',
        ],
        image: 'https://www.bootdey.com/image/800x350/87CEFA/000000',
    },
    {
        title: 'Floor Cleaning and Polishing',
        description: [
          'Our floor cleaning and polishing service is designed to keep your floors looking pristine and shiny, enhancing the beauty of your home. We cater to various flooring types, including hardwood, tile, laminate, and vinyl, ensuring that each material is treated with the utmost care and expertise. Our approach is tailored to the specific needs of your floors, so you can rest assured that we will deliver the best results possible.',
          
          'Utilizing specialized equipment and eco-friendly products, we ensure the longevity of your floors while bringing out their natural beauty. Our cleaning solutions are not only effective in removing dirt and grime but are also safe for your family and pets. We believe in a cleaning process that promotes health and sustainability, so you can enjoy your living space without harmful chemicals affecting your indoor air quality.',
          
          'Our team is trained in the latest cleaning techniques to effectively remove stains, scuffs, and dirt, leaving your floors spotless and gleaming. We pay attention to detail, addressing those hard-to-reach areas that often get overlooked. Our floor polishing process not only adds shine but also creates a protective layer that helps prevent future damage, making it easier to maintain your floors over time.',
          
          'With our floor cleaning and polishing service, you can expect a thorough and professional job that transforms your floors into the highlight of your home. Whether you’re preparing for a special event, moving into a new place, or simply want to maintain your floors, we are here to provide exceptional service. Our goal is to exceed your expectations, ensuring you are completely satisfied with the results.',
          
          'Experience the difference that a professional floor cleaning and polishing service can make. Enjoy a clean, polished floor that enhances the overall ambiance of your home and creates a welcoming environment for family and guests alike. Trust us to take care of your floors and enjoy the comfort of a beautiful, clean living space!'
      ],
      
        servicesIncluded: [
            '✔️ Floor Scrubbing',
            '✔️ Polishing',
            '✔️ Stain Removal',
            '✔️ Carpet Cleaning',
        ],
        image: 'https://www.bootdey.com/image/800x350/87CEFA/000000',
    },
    {
        title: 'Spring Cleaning',
        description: [
          'Our spring cleaning service is perfect for those looking for a deep clean that refreshes their entire home. This comprehensive cleaning is ideal for welcoming the new season with a fresh start. We go beyond the basics, ensuring every corner is spotless and every surface is polished, leaving your home looking and feeling revitalized.',
          
          'Our meticulous approach covers everything from attics to basements, ensuring no space is overlooked. We tackle dust, dirt, and grime in places you may not think to clean, such as behind appliances, inside cabinets, and on high shelves. Our team will also clean your light fixtures, ceiling fans, and baseboards, providing a thorough clean that rejuvenates your living environment.',
          
          'We understand that spring cleaning can be a daunting task, which is why we take care of all the hard work for you. Our trained professionals use high-quality, eco-friendly products to ensure that your home is not only clean but also safe for your family and pets. Our commitment to health and sustainability means that you can breathe easy knowing your space is free from harmful chemicals.',
          
          'Experience a truly refreshing clean and enjoy a clean slate as you transition into the new season. Our spring cleaning service is perfect for preparing for special occasions, such as family gatherings, or simply to revitalize your living space. We provide a customized cleaning plan tailored to your needs, ensuring that every area of your home receives the attention it deserves.',
          
          'Let us help you reclaim your space and create an inviting atmosphere that you’ll love coming home to. Our spring cleaning service is not just about cleanliness; it’s about enhancing your quality of life. Trust us to transform your home and provide you with a fresh, clean start for the months ahead!'
      ],      
        servicesIncluded: [
            '✔️ Deep Kitchen Cleaning',
            '✔️ Dusting and Vacuuming',
            '✔️ Baseboard and Trim Cleaning',
            '✔️ Attic and Basement Cleaning',
        ],
        image: 'https://www.bootdey.com/image/800x350/87CEFA/000000',
    },
];


}
