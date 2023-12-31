import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'festivos',
    loadChildren: () =>
      import('./componentes/holidays/holiday.module').then(
        (m) => m.HolidayModule
      ),
  },
  { path: '**', redirectTo: 'inicio' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
