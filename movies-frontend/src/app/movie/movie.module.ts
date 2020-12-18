import { NgModule } from '@angular/core';
import { MovieService } from './services/movie.service';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieVideoComponent } from './components/movie-video/movie-video.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { LyThemeModule } from '@alyle/ui';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyFieldModule } from '@alyle/ui/field';
import { LyGridModule } from '@alyle/ui/grid';
import { LyRadioModule } from '@alyle/ui/radio';
import { LySelectModule } from '@alyle/ui/select';
import { LySnackBarModule } from '@alyle/ui/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SortByPipe } from '../shared/pipes/sort-by/sort-by.pipe';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SelectFilterComponent } from '../shared/components/select-filter/select-filter.component';
import { SharedModule } from '../shared/shared.module';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  declarations: [
    MovieInfoComponent,
    MovieVideoComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieDetailsComponent,
    SelectFilterComponent,
    SortByPipe,
  ],
  providers: [MovieService],
  imports: [
    HttpClientModule,
    FormsModule,
    LyThemeModule,
    LyBadgeModule,
    LyRadioModule,
    LyFieldModule,
    LySnackBarModule,
    LyGridModule,
    SharedModule,
    LySelectModule,
    MovieRoutingModule,
  ],
  exports: [MovieListComponent],
})
export class MovieModule {}
