import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.scss']
})
export class ViewPdfComponent implements OnInit {

  pdfSrc;

  constructor() { }

  ngOnInit(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const pdfParam = urlParams.get('pdf');
    this.pdfSrc = pdfParam;
  }

}
