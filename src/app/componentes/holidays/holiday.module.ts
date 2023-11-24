import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidayRoutingModule } from './holiday-routing.module';
import { ReferenciasMaterialModule } from 'src/app/referencias-material.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
  declarations: [HolidaysComponent],
  imports: [
    CommonModule,
    HolidayRoutingModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ],
})
export class HolidayModule {}
