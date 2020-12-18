import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LyFieldModule } from '@alyle/ui/field';
import { AuthComponent } from './auth.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthComponent, SignupComponent, SigninComponent],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    LyFieldModule,
    SharedModule,
  ],
})
export class AuthModule {}
