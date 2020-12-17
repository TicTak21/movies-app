import { LyTheme2 } from '@alyle/ui';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const styles = {
  centered: {
    textAlign: 'center',
  },
};

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  classes = this.theme.addStyleSheet(styles);
  targetUrl = '';

  constructor(
    private readonly theme: LyTheme2,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.targetUrl = this.router.url;
  }
}
