import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  page: string = 'footer page';
  constructor() {}

  ngOnInit(): void {
    this.page = 'footer page';
  }
}
