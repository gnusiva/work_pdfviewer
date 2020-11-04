import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-pdf',
  templateUrl: './launch-pdf.component.html',
  styleUrls: ['./launch-pdf.component.scss']
})
export class LaunchPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFile(fileStr): void {
    const blob = new Blob([fileStr], { type: fileStr.type });
    const blobUrl = URL.createObjectURL(blob);
    window.open('/view-pdf?pdf=' + blobUrl , 'PDF', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=500,height=500');
  }
}
