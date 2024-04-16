import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SignalsComponent } from './signals.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = ['success-snackbar'];
    this.snackBar.openFromComponent(SignalsComponent, {
      data: { message },
      ...config
    });
  }

  showError(message: string): void {
    const config = new MatSnackBarConfig();
    config.duration = 3000;
    config.panelClass = ['error-snackbar'];
    this.snackBar.openFromComponent(SignalsComponent, {
      data: { message },
      ...config
    });
  }
}
