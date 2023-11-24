import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ReferenciasMaterialModule } from './referencias-material.module';
import { FormsModule } from '@angular/forms';
import { DecidirComponent } from './componentes/decidir/decidir.component';
import { HolidayModule } from './componentes/holidays/holiday.module';

@NgModule({
  declarations: [AppComponent, InicioComponent, DecidirComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HolidayModule,
    HttpClientModule,
    ReferenciasMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
