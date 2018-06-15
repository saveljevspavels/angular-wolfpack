import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material";
import { FileUploadComponent } from '../components/fileUpload/fileUpload.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    fileUploadRef: MatDialogRef<FileUploadComponent>;

    constructor(private dialog: MatDialog) {}

    openFileUpload() {
        this.fileUploadRef = this.dialog.open(FileUploadComponent, {
            backdropClass: 'popup__backdrop',
            panelClass: 'popup',
        });
    }
}
