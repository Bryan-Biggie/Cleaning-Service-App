import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent, ModalData } from '../confirmation-modal/confirmation-modal.component'; // Adjust the path as necessary


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {

  ngOnInit(): void {}


  constructor(public dialog: MatDialog) {}

  public sendEmail(e: Event) {
    e.preventDefault();

    const form = (e.target as HTMLFormElement);

    // Check for validity
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Form is valid, generate PDF
    this.generatePDF();

    // Show confirmation modal with dynamic data
    const paymentSummary = [
      { item: 'Cleaning Service', quantity: 1, price: 150.00 },
      { item: 'Extra Service', quantity: 1, price: 50.00 }
    ];
    const total = paymentSummary.reduce((acc, curr) => acc + curr.price, 0);

    this.showConfirmationModal(  'Thank You for Your Submission',
      'We appreciate you providing your details. Our team will review your information and get back to you shortly with your personalized quote. Thank you for choosing us!'
    , paymentSummary, total);
  }

  generatePDF() {
    const element = document.getElementById('cleaning_quotation_form'); // The form's ID

    if (element) {
      html2canvas(element).then(canvas => {
        const imgData = canvas.toDataURL('image/png'); // Convert canvas to image data
        const pdf = new jsPDF();

        // Add image to PDF
        const imgWidth = 190; // Adjust as needed
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        // Add the first page
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add additional pages if necessary
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save the PDF
        pdf.save('quotation.pdf');
      });
    } else {
      console.error("Element with ID 'cleaning_quotation_form' not found.");
    }
  }

  showConfirmationModal(title: string, message: string, paymentSummary: { item: string; quantity: number; price: number }[], total: number) {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '400px', // Adjust as necessary
      data: { title, message, paymentSummary, total } // Pass dynamic data
    });

    // Optionally, handle actions after the modal closes
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
