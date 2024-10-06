import { Component } from '@angular/core';

interface Project {
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  delay: string;
}

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrl: './main-projects.component.css'
})
export class MainProjectsComponent {
  projects: Project[] = [
    {
      title: 'Whole Home Sanitizing',
      imageUrl: '../../../assets/img/project-1.jpg',
      description: 'Whole Home Sanitizing',
      category: 'sanitizing',
      delay: '.3s'
    },
    {
      title: 'Education Center Cleaning',
      imageUrl: '../../../assets/img/project-2.jpg',
      description: 'Education center Cleaning',
      category: 'cleaning',
      delay: '.5s'
    },
    {
      title: 'Warehouse Cleaning',
      imageUrl: '../../../assets/img/project-3.jpg',
      description: 'Warehouse Cleaning',
      category: 'cleaning',
      delay: '.7s'
    },
    {
      title: 'Hospital Cleaning',
      imageUrl: '../../../assets/img/project-4.jpg',
      description: 'Hospital Cleaning',
      category: 'cleaning',
      delay: '.3s'
    },
    {
      title: 'Factory Cleaning',
      imageUrl: '../../../assets/img/project-5.jpg',
      description: 'Factory Cleaning',
      category: 'cleaning',
      delay: '.5s'
    },
    {
      title: 'Furniture Sanitizing',
      imageUrl: '../../../assets/img/project-6.jpg',
      description: 'Furniture Sanitizing',
      category: 'sanitizing',
      delay: '.7s'
    }
  ];

  // Filtering category
  selectedCategory: string = 'all';

  // Modal Image
  modalImageUrl: string = '';
  imgTitle: string = '';
  isModalOpen = false;

  // Filter method
  setCategory(category: string) {
    this.selectedCategory = category;
  }

  // Open Modal
  openModal(imageUrl: string, imgTitle: string) {
    this.imgTitle = imgTitle;
    this.modalImageUrl = imageUrl;
    this.isModalOpen = true;
  }

  // Close Modal
  closeModal() {
    this.isModalOpen = false;
  }
}
