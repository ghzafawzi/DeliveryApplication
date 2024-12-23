import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
import { initializeApp } from 'firebase/app';

if (environment.production) {
  enableProdMode();
}

initializeApp(environment.firebase);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));