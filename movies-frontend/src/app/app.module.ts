import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

// === Modules ===
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MovieModule } from './movie/movie.module';
import { ShareModule } from 'ngx-sharebuttons';

// === Ly ===
import {
  LyHammerGestureConfig,
  LyThemeModule,
  LY_THEME,
  LY_THEME_NAME,
  StyleRenderer,
  LyTheme2,
} from '@alyle/ui';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { LySnackBarModule } from '@alyle/ui/snack-bar';
import { LyBadgeModule } from '@alyle/ui/badge';
import { LyCommonModule } from '@alyle/ui';
import { LyDrawerModule } from '@alyle/ui/drawer';
import { LyRadioModule } from '@alyle/ui/radio';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LyGridModule } from '@alyle/ui/grid';
import { LyDividerModule } from '@alyle/ui/divider';
import { LyFieldModule } from '@alyle/ui/field';
import { LyDialogModule } from '@alyle/ui/dialog';
import { LyOverlayModule } from '@alyle/ui';
import { LyCarouselModule } from '@alyle/ui/carousel';
import { LyAvatarModule } from '@alyle/ui/avatar';

// === components ===
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShareDialogComponent } from './shared/components/share-dialog/share-dialog.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ShareDialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LyThemeModule,
    LyBadgeModule,
    LyAvatarModule,
    LyToolbarModule,
    LyCommonModule,
    LyDrawerModule,
    LyRadioModule,
    LyFieldModule,
    AboutModule,
    LySnackBarModule,
    LyGridModule,
    LyDividerModule,
    LyDialogModule,
    ShareModule,
    LyOverlayModule,
    LyCarouselModule,
    MovieModule,
    PageNotFoundModule,
    HomeModule,
    SharedModule,
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
