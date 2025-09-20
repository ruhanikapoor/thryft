import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public app: FirebaseApp;
  public auth: Auth;
  public firestore: Firestore;

  constructor() {
    this.app = initializeApp(environment.firebase);
    this.auth = getAuth(this.app);
    this.firestore = getFirestore(this.app);
  }
}