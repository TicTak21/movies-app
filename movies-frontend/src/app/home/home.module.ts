import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LyCarouselModule } from '@alyle/ui/carousel';
import { LyOverlayModule } from '@alyle/ui';
import { LyTypographyModule } from '@alyle/ui/typography';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LyCarouselModule,
    LyOverlayModule,
    LyTypographyModule,
  ],
})
export class HomeModule {}
