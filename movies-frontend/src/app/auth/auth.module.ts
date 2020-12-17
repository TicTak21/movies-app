import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

// === Ly ===
import { LyTypographyModule } from '@alyle/ui/typography';
import { LyButtonModule } from '@alyle/ui/button';
import { LyFieldModule } from '@alyle/ui/field';

// === components ===
import { AuthComponent } from './auth.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { LyIconModule } from '@alyle/ui/icon';

@NgModule({
  declarations: [AuthComponent, SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    LyTypographyModule,
    LyButtonModule,
    LyFieldModule,
    LyIconModule,
  ],
})
export class AuthModule {}
