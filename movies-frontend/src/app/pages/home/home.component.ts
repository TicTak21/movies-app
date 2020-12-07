/* eslint-disable max-len */
import { LyTheme2 } from '@alyle/ui';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

const styles = {
  carousel: {
    margin: '1em auto',
    maxWidth: '540px',
    height: '50vh',
    minHeight: '220px',
    maxHeight: '320px',
  },
  carouselItem: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    flexDirection: 'column',
    padding: '1em 1em 48px',
    boxSizing: 'border-box',
    color: '#fff',
  },
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public readonly items = [
    {
      title: 'Watch',
      img:
        'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80',
    },
    {
      title: 'Eat',
      img:
        'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80',
    },
    {
      title: 'Repeat',
      img:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1640&q=80',
    },
  ];

  public readonly carouselInterval = 8000;

  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}
}
