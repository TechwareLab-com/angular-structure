import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  page: string = 'header page';
  constructor() {}

  ngOnInit(): void {
    this.page = 'header page';
  }
}
