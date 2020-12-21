import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IActor } from '../../actor.interface';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss'],
})
export class ActorDetailsComponent implements OnInit {
  public actor$: Observable<IActor> = new Observable<IActor>();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly actorService: ActorService,
  ) {}

  ngOnInit(): void {
    const paramId = this.activatedRoute.snapshot.params.id;

    if (paramId != null) {
      this.actor$ = this.actorService.getActorById(paramId);
    }
  }
}
