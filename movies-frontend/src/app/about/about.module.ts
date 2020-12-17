import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { LyIconModule } from '@alyle/ui/icon';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyListModule } from '@alyle/ui/list';
import { SharedModule } from '../shared/shared.module';
import { LyTypographyModule } from '@alyle/ui/typography';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LyAvatarModule,
    LyListModule,
    SharedModule,
    LyIconModule,
    LyTypographyModule,
  ],
})
export class AboutModule {}
