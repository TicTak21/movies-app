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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CarouselComponent } from './components/carousel/carousel.component';

import { MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    ShareDialogComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LyThemeModule,
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
    MovieModule,
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
