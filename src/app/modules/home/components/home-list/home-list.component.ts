import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {
  page: string = 'Home page';
  constructor() {}

  ngOnInit(): void {
    this.page = 'Home page';
  }
}
