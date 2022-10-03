import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  state$ = authState(this.auth)
  constructor(private auth: Auth) { }

  onRegister({email, password}: any): Promise<UserCredential>{
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  onLogin({email, password}: any): Promise<UserCredential>{
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  onSignOut(): Promise<void>{
    return signOut(this.auth)
  }
}
