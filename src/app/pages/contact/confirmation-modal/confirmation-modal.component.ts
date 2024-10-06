import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ModalData {
  title: string;
  message: string;
  paymentSummary?: { item: string; quantity: number; price: number }[]; // Optional payment summary
  total?: number; // Optional total amount
}

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
