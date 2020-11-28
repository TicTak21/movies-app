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
import { LyTooltipModule } from '@alyle/ui/tooltip';

// === components ===
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movie/movies-list/movies-list.component';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieCardComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
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
    LySnackBarModule,
    LyGridModule,
    LyDividerModule,
    LyTooltipModule,
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
