import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { LyAvatarModule } from '@alyle/ui/avatar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, LyAvatarModule, SharedModule],
})
export class AboutModule {}
