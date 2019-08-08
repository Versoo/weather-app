import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ErrorDialogComponent} from "../components";

@Injectable({
  providedIn: 'root'
})
export class ErrorApiHandlerService {

  constructor(public dialog: MatDialog) {
  }

  openDialog(data): void {
    this.dialog.closeAll();
    this.dialog.open(ErrorDialogComponent, {
      width: '500px',
      data: data
    });
  }
}
