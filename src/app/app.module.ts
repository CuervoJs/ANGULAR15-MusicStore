import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerModule } from './commons/components/container/container.module';

//IMPORTANTE
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';

import LocalEsPe from '@angular/common/locales/es-PE';
registerLocaleData(LocalEsPe);

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, ContainerModule, HttpClientModule],
	providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
	bootstrap: [AppComponent]
})
export class AppModule {}
