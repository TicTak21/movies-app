import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LyCarouselModule } from '@alyle/ui/carousel';
import { LyOverlayModule } from '@alyle/ui';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [HomeRoutingModule, LyCarouselModule, LyOverlayModule, SharedModule],
})
export class HomeModule {}
