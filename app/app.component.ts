import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Dialog1Component } from './dialog1.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(Dialog1Component, {
      id: 'dialog1'
    });

    console.log(dialogRef);
  }
}
