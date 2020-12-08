/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ICarouselItem } from 'src/app/shared/types/ui.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public readonly carouselItems: ICarouselItem[] = [
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

  constructor() {}

  ngOnInit(): void {}
}
