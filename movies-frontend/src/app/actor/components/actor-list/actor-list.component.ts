import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IActor } from '../../actor.interface';
import { ActorService } from '../../services/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
})
export class ActorListComponent implements OnInit {
  public actors$: Observable<IActor[]> = new Observable<IActor[]>();

  constructor(private readonly actorService: ActorService) {}

  ngOnInit(): void {
    this.fetchActors();
  }

  private fetchActors(): void {
    this.actors$ = this.actorService.getAllActors();
  }
}
