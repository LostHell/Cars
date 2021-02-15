import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent {
  @Input() label: string;

  @Input() hasFiles = false;

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
        };
      }
    }
  }
}
