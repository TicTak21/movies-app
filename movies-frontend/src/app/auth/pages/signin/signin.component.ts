import { LyTheme2 } from '@alyle/ui';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  container: {
    maxWidth: '300px',
  },
  ctrl: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public readonly classes = this.theme.addStyleSheet(styles);

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private readonly theme: LyTheme2) {}

  ngOnInit(): void {}

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
