import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements OnInit {
  @Input() label: string;
  @Input() hasFiles = false;

  constructor() {}

  ngOnInit(): void {}

  upload(files) {
    if (!!files) {
      this.hasFiles = true;
    }
    console.log(files[0]);
  }
}
