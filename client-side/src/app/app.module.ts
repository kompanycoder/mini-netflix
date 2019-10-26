import * as Rollbar from 'rollbar';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable,
  Injector,
  InjectionToken,
  NgModule,
  ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { MoviesLayoutComponent } from './components/layout/movies-layout/movies-layout.component';
import { FooterComponent } from './components/layout/footer/footer.component';

const rollbarConfig = {
  accessToken: '20b080fd08b04ca384fc5c68d8e13cb6',
  captureUncaught: true,
  captureUnhandledRejections: true,
};

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
  constructor(@Inject(RollbarService) private rollbar: Rollbar) {}

  handleError(err:any) : void {
    this.rollbar.error(err.originalError || err);
  }
}

export function rollbarFactory() {
    return new Rollbar(rollbarConfig);
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesLayoutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: RollbarErrorHandler },
    { provide: RollbarService, useFactory: rollbarFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
