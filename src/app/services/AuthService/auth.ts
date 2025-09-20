import { Injectable, signal } from '@angular/core';
import { UserProfile } from '../../../interfaces/user.interface';
import { firebaseAuth } from '../../../main';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = signal<UserProfile | null>(null);
  readonly currentUser = this._currentUser.asReadonly();

  constructor() {
    onAuthStateChanged(firebaseAuth, (firebaseUser: User | null) => {
      if (firebaseUser) {
        const profile: UserProfile = {
          id: firebaseUser.uid,
          name: firebaseUser.displayName ?? firebaseUser.email?.split('@')[0] ?? '',
          email: firebaseUser.email ?? '',
          avatarUrl: firebaseUser.photoURL ?? undefined,
        };
        this._currentUser.set(profile);
      } else {
        this._currentUser.set(null);
      }
    });
  }

  async login(email: string, password: string): Promise<boolean> {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  }

  async signUp(email: string, password: string): Promise<boolean> {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
  }

  async logout(): Promise<void> {
    await signOut(firebaseAuth);
  }

  isLoggedIn(): boolean {
    return this._currentUser() !== null;
  }
}
