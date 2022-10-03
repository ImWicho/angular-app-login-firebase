import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-fire-app';
  form = this.fb.group({
    email : ['', [Validators.required]],
    password : ['', [Validators.required]],
  })
  user$ = this.authService.state$
  constructor(private fb: FormBuilder, public authService: AuthService){
  }

  onLogin():void{
    this.authService.onLogin(this.form.value)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  onRegister():void{
    this.authService.onRegister(this.form.value)
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  onSignOut():void{
    this.authService.onSignOut()
  }
}
