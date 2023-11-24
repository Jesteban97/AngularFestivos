import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Holiday } from 'src/app/entidades/holiday';
import { HolidayService } from 'src/app/servicios/Holiday.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
})
export class HolidaysComponent {
  public year: string = '';
  public date: any;
  public holidays: Holiday[] = [];
  public columnas = [
    { name: 'Festivo', prop: 'holiday' },
    { name: 'Código', prop: 'id' },
    { name: 'Fecha', prop: 'date' },
  ];
  public tipoSeleccion = SelectionType;
  public modoColumna = ColumnMode;
  public empresaSeleccionada: Holiday | undefined;
  constructor(private holidayService: HolidayService) {}

  public getHolidays() {
    if (this.year.length > 0) {
      this.holidayService.getHolidays(this.year).subscribe(
        (respuesta) => {
          this.holidays = respuesta;
        },
        (error: HttpErrorResponse) => {
          window.alert(`Error Buscando la Empresa: [${error.message}]`);
        }
      );
    }
  }

  public getHolidaysValidate() {
    console.log(this.date);
    if (this.date) {
      const year = this.date.getFullYear();
      const month = this.date.getMonth();
      const day = this.date.getDate();
      this.holidayService
        .getVerifyHoliday(String(year), String(month + 1), String(day))
        .subscribe(
          (respuesta) => {
            alert(respuesta);
          },
          (error: HttpErrorResponse) => {
            window.alert(
              `Error En la busqueda del festivo: [${error.message}]`
            );
          }
        );
    }
  }

  public onActivate(event: any) {
    if (event.type == 'click') {
      this.empresaSeleccionada = event.row;
    }
  }
}
