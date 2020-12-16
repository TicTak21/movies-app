import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from './services/movie.service';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieVideoComponent } from './components/movie-video/movie-video.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LyThemeModule, LyOverlayModule } from '@alyle/ui';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyButtonModule } from '@alyle/ui/button';
import { LyCarouselModule } from '@alyle/ui/carousel';
import { LyDialogModule } from '@alyle/ui/dialog';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyIconModule } from '@alyle/ui/icon';
import { LyListModule } from '@alyle/ui/list';
import { LyRadioModule } from '@alyle/ui/radio';
import { LySelectModule } from '@alyle/ui/select';
import { LySnackBarModule } from '@alyle/ui/snack-bar';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyTypographyModule } from '@alyle/ui/typography';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from 'ngx-sharebuttons';
import { AppRoutingModule } from '../app-routing.module';
import { SortByPipe } from '../shared/pipes/sort-by/sort-by.pipe';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieDetailsComponent } from './pages/movie/movie-details/movie-details.component';
import { SelectFilterComponent } from '../components/select-filter/select-filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MovieInfoComponent,
    MovieVideoComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieComponent,
    MovieDetailsComponent,
    SelectFilterComponent,
    SortByPipe,
  ],
  providers: [MovieService],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LyThemeModule,
    HammerModule,
    LyIconModule,
    LyTypographyModule,
    LyButtonModule,
    LyBadgeModule,
    LyListModule,
    LyToolbarModule,
    LyDrawerModule,
    LyRadioModule,
    LyFieldModule,
    LySnackBarModule,
    LyGridModule,
    SharedModule,
    LyOverlayModule,
    LyCarouselModule,
    LySelectModule,
  ],
  exports: [MovieListComponent],
})
export class MovieModule {}
