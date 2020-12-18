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

@NgModule({
  declarations: [ActorListComponent, ActorCardComponent],
  imports: [
    SharedModule,
    ActorRoutingModule,
    LyCardModule,
    LyCommonModule,
    LyGridModule,
    LyBadgeModule,
  ],
  providers: [ActorService],
})
export class ActorModule {}
