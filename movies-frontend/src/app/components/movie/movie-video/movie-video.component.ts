import { LyTheme2 } from '@alyle/ui';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MovieService } from 'src/app/shared/services/movie/movie.service';

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
  @Input() public title = '';
  public initialUrl = '';

  public readonly classes = this.theme.addStyleSheet(styles);

  private baseEmbedUrl = 'https://www.youtube.com/embed/';

  constructor(
    private readonly theme: LyTheme2,
    private readonly sanitizer: DomSanitizer,
    private readonly movieService: MovieService,
  ) {}

  public getEmbedUrl(): SafeResourceUrl {
    const id = this.getIdFromUrl(this.initialUrl);
    const embedUrl = `${this.baseEmbedUrl}${id}`;

    return this.sanitizeUrl(embedUrl);
  }

  ngOnInit(): void {
    this.getInitialUrl(this.title);
  }

  private async getInitialUrl(title: string): Promise<void> {
    this.initialUrl = await this.movieService.getMovieTrailer(title);
  }

  private getIdFromUrl(url: string): string {
    return url.substr(url.lastIndexOf('v=') + 2, 11);
  }

  private sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
