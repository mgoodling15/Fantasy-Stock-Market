//file that sets up modules for the app

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//import { Http, HttpModule, RequestOptions } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic().bootstrapModule(HttpModule);
//platformBrowserDynamic().bootstrapModule(Http);
//platformBrowserDynamic().bootstrapModule(RequestOptions);
