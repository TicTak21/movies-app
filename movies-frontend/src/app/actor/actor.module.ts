import { NgModule } from '@angular/core';
import { ActorService } from './services/actor.service';
import { SharedModule } from '../shared/shared.module';
import { ActorRoutingModule } from './actor-routing.module';
import { ActorListComponent } from './components/actor-list/actor-list.component';
import { ActorCardComponent } from './components/actor-card/actor-card.component';
import { LyCardModule } from '@alyle/ui/card';
import { LyCommonModule } from '@alyle/ui';
import { LyGridModule } from '@alyle/ui/grid';
import { LyBadgeModule } from '@alyle/ui/badge';
import { ActorDetailsComponent } from './components/actor-details/actor-details.component';
import { LyAvatarModule } from '@alyle/ui/avatar';

@NgModule({
  declarations: [ActorListComponent, ActorCardComponent, ActorDetailsComponent],
  imports: [
    SharedModule,
    ActorRoutingModule,
    LyCardModule,
    LyCommonModule,
    LyGridModule,
    LyBadgeModule,
    LyAvatarModule,
  ],
  providers: [ActorService],
})
export class ActorModule {}
