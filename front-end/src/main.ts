import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {applyPolyfills, defineCustomElements} from "h8k-components/loader";
import { environment } from './app/environments/environment';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { TemperatureConverter } from './app/temperatureConverter/temperatureConverter.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: "", component: TemperatureConverter },
    ])
  ]
})
.catch(err => console.error(err));
