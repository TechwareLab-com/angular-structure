import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { AuthDirective } from './directives/auth.directive';
import { MyErrorDirective } from './directives/my-error.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { TextFilterPipe } from './pipes/text-filter.pipe';

@NgModule({
  declarations: [
    LoaderComponent,
    AuthDirective,
    MyErrorDirective,
    CapitalizePipe,
    SafePipe,
    TextFilterPipe,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
