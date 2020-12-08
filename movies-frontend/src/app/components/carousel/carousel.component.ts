import { LyTheme2 } from '@alyle/ui';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ICarouselItem } from 'src/app/shared/types/ui.types';

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
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  @Input()
  items: ICarouselItem[] = [];

  public readonly carouselInterval = 8000;

  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}
}
