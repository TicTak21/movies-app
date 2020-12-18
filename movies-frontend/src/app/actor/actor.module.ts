import { NgModule } from '@angular/core';
import { ActorService } from './actor.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [SharedModule],
  providers: [ActorService],
})
export class ActorModule {}
