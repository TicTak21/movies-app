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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public readonly classes = this.theme.addStyleSheet(styles);

  profileForm = new FormGroup({
    username: new FormControl('', [
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('+', [Validators.minLength(13)]),
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
