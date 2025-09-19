import { Injectable, signal } from '@angular/core';
import { UserProfile } from '../../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = signal<UserProfile | null>(this.loadUser());

  readonly currentUser = this._currentUser.asReadonly();
  login(email: string, password: string): boolean {
    const user: UserProfile = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email,
    };
    localStorage.setItem('user', JSON.stringify(user));
    this._currentUser.set(user);
    return true;
  }

  logout(): void {
    localStorage.removeItem('user');
    this._currentUser.set(null);
  }

  isLoggedIn(): boolean {
    return this._currentUser() !== null;
  }

  private loadUser(): UserProfile | null {
    const data = localStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  }

}
