import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {
  LyHammerGestureConfig,
  LyThemeModule,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';

// === shared ===
import { SortByPipe } from './shared/pipes/sort-by/sort-by.pipe';

// === ngx-sharebuttons ===
import { ShareModule } from 'ngx-sharebuttons';

// === Ly ===
import { LySnackBarModule } from '@alyle/ui/snack-bar';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyListModule } from '@alyle/ui/list';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { LyCommonModule } from '@alyle/ui';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyButtonModule } from '@alyle/ui/button';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyIconModule } from '@alyle/ui/icon';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyGridModule } from '@alyle/ui/grid';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyFieldModule } from '@alyle/ui/field';
import { LyDialogModule } from '@alyle/ui/dialog';
import { LyOverlayModule } from '@alyle/ui';
import { LyCarouselModule } from '@alyle/ui/carousel';

// === components ===
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    MovieListComponent,
    MovieComponent,
    SortByPipe,
    ShareDialogComponent,
    SpinnerComponent,
  ],
  imports: [
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
    LyAvatarModule,
    LyToolbarModule,
    LyCommonModule,
    LyDrawerModule,
    LyRadioModule,
    LyFieldModule,
    LySnackBarModule,
    LyGridModule,
    LyDividerModule,
    LyDialogModule,
    ShareModule,
    LyOverlayModule,
    LyCarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig },
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-dark' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true },
    { provide: LY_THEME, useClass: MinimaDark, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
