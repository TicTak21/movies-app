import { LyTheme2 } from '@alyle/ui';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

const styles = {
  wrapper: {
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',

    iframe: {
      border: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
};

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss'],
})
export class MovieVideoComponent implements OnInit {
  @Input() public videoUrl = '';

  public readonly classes = this.theme.addStyleSheet(styles);

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}
}
