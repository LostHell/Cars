import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  @Input() label: string;

  @Input() hasFiles = false;

  @Output() imagesArray = new EventEmitter<any>();

  images = [];

  constructor() {}

  upload(files) {
    if (!!files) {
      this.hasFiles = true;

      for (const file of files) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          this.images = this.images.concat(reader.result);
          this.imagesArray.emit(reader.result);
        };
      }
    }
  }
}
