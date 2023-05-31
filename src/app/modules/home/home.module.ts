import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './components/home-list/home-list.component';

@NgModule({
  declarations: [HomeListComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
