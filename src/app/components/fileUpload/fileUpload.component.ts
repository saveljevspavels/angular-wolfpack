import { Component } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';

@Component({
  selector: 'app-fileUpload',
  templateUrl: './fileUpload.component.html',
  styleUrls: ['./fileUpload.component.scss']
})
export class FileUploadComponent {
  heading = "Upload your files"

  public files: UploadFile[] = [];

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      alert('File uploaded')
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
}
