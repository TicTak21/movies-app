import { LyTheme2 } from '@alyle/ui';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IActor } from '../../actor.interface';
import { ActorService } from '../../services/actor.service';

const style = {
  listWrapper: {},
};

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.scss'],
})
export class ActorListComponent implements OnInit {
  public actors$: Observable<IActor[]> = new Observable<IActor[]>();

  public readonly classes = this.theme.addStyleSheet(style);

  constructor(
    private readonly actorService: ActorService,
    private readonly theme: LyTheme2,
  ) {}

  ngOnInit(): void {
    this.fetchActors();
  }

  private fetchActors(): void {
    this.actors$ = this.actorService.getAllActors();
  }
}
