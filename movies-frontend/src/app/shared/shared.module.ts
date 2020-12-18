import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyIconModule } from '@alyle/ui/icon';
import { LyListModule } from '@alyle/ui/list';
import { LyButtonModule } from '@alyle/ui/button';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [
    SpinnerComponent,
    CommonModule,
    LyTypographyModule,
    LyIconModule,
    LyListModule,
    LyButtonModule,
  ],
})
export class SharedModule {}
