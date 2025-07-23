import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';

const firebaseConfig = {
  projectId: "fir-crude-angular",
  appId: "1:983389357577:web:b34a0f5e0c20a0f00a1ad8",
  databaseURL: "https://fir-crude-angular-default-rtdb.firebaseio.com",
  storageBucket: "fir-crude-angular.firebasestorage.app",
  apiKey: "AIzaSyB98FdpgsXKEPgYLTtBQLT6GKxCD8VW0Qc",
  authDomain: "fir-crude-angular.firebaseapp.com",
  messagingSenderId: "983389357577"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase())
  ]
};
