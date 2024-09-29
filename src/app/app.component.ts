import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogImageComponent } from "./features/dialogs/dialog-image/dialog.image";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animal: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogImageComponent, {
      data: { name: this.name, animal: this.animal }, height: 'auto',
      width: '600px',
    },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
